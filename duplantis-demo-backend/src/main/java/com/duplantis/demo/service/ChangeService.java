package com.duplantis.demo.service;

import java.util.Map;

public interface ChangeRequestService {

    Map<String, Object> createChangeForm();

    Map<String, Object> saveChangeForm();

    Map<String, Object> deleteChangeForm();

}
