package com.duplantis.demo.util;

public class DemoStringUtils {

    public static final String joinWithColon(String ...args) throws Exception {
        if (args.length == 0)
            return "";
        String res = args[0];
        for (int i = 1; i < args.length; i++)
            res += (":" + args[i]);
        return res;
    }
}
