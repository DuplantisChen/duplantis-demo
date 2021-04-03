package com.duplantis.demo.service.idn;

import java.util.Map;

public interface IdentifyService {

    public Map<String, Object> login(String stafNo, String pswd);

    public Map<String, Object> register(String stafNo, String pswd);

}
