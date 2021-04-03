package com.duplantis.demo.mapper;

import com.duplantis.demo.data.ChgDetl;

public interface ChgDetlMapper {
    int deleteByPrimaryKey(String reqId);

    int insert(ChgDetl record);

    int insertSelective(ChgDetl record);

    ChgDetl selectByPrimaryKey(String reqId);

    int updateByPrimaryKeySelective(ChgDetl record);

    int updateByPrimaryKey(ChgDetl record);
}