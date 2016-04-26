package com.awesomeproject.JsCallNaWithCallbackExample;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * liuzhenhui 16/4/26.下午3:25
 */
public class CallNaWithCallbackModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "CallNaWithCallbackModule";

    public CallNaWithCallbackModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void calculatAdd(String numA, String numB, Callback errCallback, Callback successCallback) {
        try {
            int result = add(numA, numB);
            successCallback.invoke(result);
        } catch (Exception e) {
            errCallback.invoke(e.getMessage());
        }
    }

    private int add(String a, String b) {
        int numA = Integer.valueOf(a);
        int numB = Integer.valueOf(b);
        return numA + numB;
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from javascript.
     */
    @Override
    public String getName() {
        return MODULE_NAME;
    }
}
