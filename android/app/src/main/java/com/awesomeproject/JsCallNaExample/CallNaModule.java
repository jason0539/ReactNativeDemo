package com.awesomeproject.JsCallNaExample;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Intent;
import android.widget.Toast;

/**
 * liuzhenhui 16/4/22.下午2:09
 */
public class CallNaModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "CallNaModule";

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public CallNaModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void call(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        if (getCurrentActivity() != null) {
            Intent intent = new Intent(getCurrentActivity(), NaActivity.class);
            intent.putExtra("extra", message);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(intent);
        }
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from javascript.
     */
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }
}
