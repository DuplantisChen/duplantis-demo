package com.duplantis.demo.redisson;

import com.duplantis.demo.constants.MsgConstants;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Supplier;
import org.redisson.Redisson;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
@Slf4j
public class RedissonManager {

    RedissonClient redisson;

    RedissonManager() {
        Config config = new Config();
        config.useSingleServer()
              .setAddress("redis://127.0.0.1:6379");
        redisson = Redisson.create(config);
    }

    public <T> T lock(String key, Supplier<T> success, Supplier<T> fail) throws Exception {
        return lock(key, 0L, 10000L, success, fail);
    }

    public <T> T lock(String key, Long timeout, Long expire, Supplier<T> success, Supplier<T> fail) throws Exception {
        RLock rLock = redisson.getLock(key);
        boolean get = rLock.tryLock(timeout, expire, TimeUnit.MILLISECONDS);
        try {
            return get ? success.get() : fail.get();
        } finally {
            if (get) {
                if (rLock.isLocked()) {
                    rLock.unlock();
                }
            }
        }
    }

    
}
