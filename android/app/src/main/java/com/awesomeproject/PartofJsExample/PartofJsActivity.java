package com.awesomeproject.PartofJsExample;

import com.awesomeproject.R;
import com.awesomeproject.UseNaComponentExample.UseNaComponentPackage;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.shell.MainReactPackage;

import android.app.Activity;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

/**
 * liuzhenhui 16/4/26.上午9:58
 */
public class PartofJsActivity extends Activity implements DefaultHardwareBackBtnHandler {

    public static final String EVENT_NAME_EXAM = "keyboardWillShow";

    private EditText mEtInput;
    private Button mBtnSend;

    private ReactRootView mReactRootView;
    private ReactContext mReactContext;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_partofjs);

        mEtInput = (EditText) findViewById(R.id.et_input);
        mBtnSend = (Button) findViewById(R.id.btn_send_to_js);
        mReactRootView = (ReactRootView) findViewById(R.id.rn_part_of);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new UseNaComponentPackage())
                .setUseDeveloperSupport(com.awesomeproject.BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "PartOfJsActivity", null);

        mBtnSend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String input = mEtInput.getText().toString().trim();
                if (!TextUtils.isEmpty(input)) {
                    WritableMap params = Arguments.createMap();
                    params.putString("param", input);
                    sendEventToJs(EVENT_NAME_EXAM, params);
                }
            }
        });
    }

    private void sendEventToJs(String eventName, WritableMap params) {
        mReactInstanceManager.getCurrentReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    /**
     * By default, all onBackPress() calls should not execute the default backpress handler and should
     * instead propagate it to the JS instance. If JS doesn't want to handle the back press itself,
     * it shall call back into native to invoke this function which should execute the default handler
     */
    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        } else {
            return super.onKeyUp(keyCode, event);
        }
    }
}
