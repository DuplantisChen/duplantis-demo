package com.duplantis.demo.service.idn.impl;

import com.duplantis.demo.constants.MsgConstants;
import com.duplantis.demo.dao.IdentityMapper;
import com.duplantis.demo.service.idn.IdentifyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class IdentifyServiceImpl implements IdentifyService {

    @Autowired
    IdentityMapper identityMapper;

    public Map<String, Object> login(String stafNo, String pswd) {
        Map<String, Object> response = new HashMap<String, Object>(3);
        if (identityMapper.validIdentity(stafNo, pswd) == 1) {
            response.put("msgCode", MsgConstants.SUCCESS_CODE);
            response.put("stafNo", stafNo);
        } else {
            response.put("msgCode", MsgConstants.LOGIN_FAILED);
        }
        return response;
    }

    public Map<String, Object> register(String stafNo, String pswd) {
        Map<String, Object> response = new HashMap<String, Object>(12);
        int result = 0;
        if (identityMapper.validIdentity(stafNo, pswd) == 1) {
            response.put("msgCode", MsgConstants.IDENTITY_EXISTS);
        }

        try {
            result = identityMapper.insert(stafNo, pswd);
        } catch (Exception e) {
            log.error(e.getMessage());
            response.put("msgCode", MsgConstants.FAIL_CODE);
        }

        if (result == 1) {
            response.put("msgCode", MsgConstants.SUCCESS_CODE);
            response.put("stafNo", stafNo);
        }
        return response;
    }
}
