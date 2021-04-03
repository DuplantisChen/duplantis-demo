package com.duplantis.demo.data;

import java.util.Date;

public class IdnIdty {
    private Long sysUserId;

    private String stafNo;

    private String pswd;

    private Integer stat;

    private Date statValiDate;

    private Date statInvaDate;

    private Date crtDate;

    private Date crtTime;

    private String ctrUser;

    private Date lastUpdDate;

    private Date lastUpdTime;

    private String lastUpdUser;

    public IdnIdty(Long sysUserId, String stafNo, String pswd, Integer stat, Date statValiDate, Date statInvaDate, Date crtDate, Date crtTime, String ctrUser, Date lastUpdDate, Date lastUpdTime, String lastUpdUser) {
        this.sysUserId = sysUserId;
        this.stafNo = stafNo;
        this.pswd = pswd;
        this.stat = stat;
        this.statValiDate = statValiDate;
        this.statInvaDate = statInvaDate;
        this.crtDate = crtDate;
        this.crtTime = crtTime;
        this.ctrUser = ctrUser;
        this.lastUpdDate = lastUpdDate;
        this.lastUpdTime = lastUpdTime;
        this.lastUpdUser = lastUpdUser;
    }

    public IdnIdty() {
        super();
    }

    public Long getSysUserId() {
        return sysUserId;
    }

    public void setSysUserId(Long sysUserId) {
        this.sysUserId = sysUserId;
    }

    public String getStafNo() {
        return stafNo;
    }

    public void setStafNo(String stafNo) {
        this.stafNo = stafNo == null ? null : stafNo.trim();
    }

    public String getPswd() {
        return pswd;
    }

    public void setPswd(String pswd) {
        this.pswd = pswd == null ? null : pswd.trim();
    }

    public Integer getStat() {
        return stat;
    }

    public void setStat(Integer stat) {
        this.stat = stat;
    }

    public Date getStatValiDate() {
        return statValiDate;
    }

    public void setStatValiDate(Date statValiDate) {
        this.statValiDate = statValiDate;
    }

    public Date getStatInvaDate() {
        return statInvaDate;
    }

    public void setStatInvaDate(Date statInvaDate) {
        this.statInvaDate = statInvaDate;
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

    public String getCtrUser() {
        return ctrUser;
    }

    public void setCtrUser(String ctrUser) {
        this.ctrUser = ctrUser == null ? null : ctrUser.trim();
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