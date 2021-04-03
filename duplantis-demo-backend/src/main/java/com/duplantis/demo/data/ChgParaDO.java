package com.duplantis.demo.data;

import java.util.Date;

public class ChgPara {
    private String paraId;

    private String paraType;

    private String paraDscr;

    private String parentType;

    private String paraDscrChn;

    private Date crtDate;

    private Date crtTime;

    private String crtUser;

    private Date lastUpdDate;

    private Date lastUpdTime;

    private String lastUpdUser;

    public ChgPara(String paraId, String paraType, String paraDscr, String parentType, String paraDscrChn, Date crtDate, Date crtTime, String crtUser, Date lastUpdDate, Date lastUpdTime, String lastUpdUser) {
        this.paraId = paraId;
        this.paraType = paraType;
        this.paraDscr = paraDscr;
        this.parentType = parentType;
        this.paraDscrChn = paraDscrChn;
        this.crtDate = crtDate;
        this.crtTime = crtTime;
        this.crtUser = crtUser;
        this.lastUpdDate = lastUpdDate;
        this.lastUpdTime = lastUpdTime;
        this.lastUpdUser = lastUpdUser;
    }

    public ChgPara() {
        super();
    }

    public String getParaId() {
        return paraId;
    }

    public void setParaId(String paraId) {
        this.paraId = paraId == null ? null : paraId.trim();
    }

    public String getParaType() {
        return paraType;
    }

    public void setParaType(String paraType) {
        this.paraType = paraType == null ? null : paraType.trim();
    }

    public String getParaDscr() {
        return paraDscr;
    }

    public void setParaDscr(String paraDscr) {
        this.paraDscr = paraDscr == null ? null : paraDscr.trim();
    }

    public String getParentType() {
        return parentType;
    }

    public void setParentType(String parentType) {
        this.parentType = parentType == null ? null : parentType.trim();
    }

    public String getParaDscrChn() {
        return paraDscrChn;
    }

    public void setParaDscrChn(String paraDscrChn) {
        this.paraDscrChn = paraDscrChn == null ? null : paraDscrChn.trim();
    }

    public Date getCrtDate() {
        return crtDate;
    }

    public void setCrtDate(Date crtDate) {
        this.crtDate = crtDate;
    }

    public Date getCrtTime() {
        return crtTime;
    }

    public void setCrtTime(Date crtTime) {
        this.crtTime = crtTime;
    }

    public String getCrtUser() {
        return crtUser;
    }

    public void setCrtUser(String crtUser) {
        this.crtUser = crtUser == null ? null : crtUser.trim();
    }

    public Date getLastUpdDate() {
        return lastUpdDate;
    }

    public void setLastUpdDate(Date lastUpdDate) {
        this.lastUpdDate = lastUpdDate;
    }

    public Date getLastUpdTime() {
        return lastUpdTime;
    }

    public void setLastUpdTime(Date lastUpdTime) {
        this.lastUpdTime = lastUpdTime;
    }

    public String getLastUpdUser() {
        return lastUpdUser;
    }

    public void setLastUpdUser(String lastUpdUser) {
        this.lastUpdUser = lastUpdUser == null ? null : lastUpdUser.trim();
    }
}