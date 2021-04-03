package com.duplantis.demo.mapper;

import com.duplantis.demo.data.ChgPara;

public interface ChgParaMapper {
    int deleteByPrimaryKey(String paraId);

    int insert(ChgPara record);

    int insertSelective(ChgPara record);

    ChgPara selectByPrimaryKey(String paraId);

    int updateByPrimaryKeySelective(ChgPara record);

    int updateByPrimaryKey(ChgPara record);
}