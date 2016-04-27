package com.awesomeproject.UseNaComponentExample;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

/**
 * liuzhenhui 16/4/27.下午2:35
 */
public class UseNaComponentPackage implements ReactPackage {
    /**
     * @param reactContext react application context that can be used to create modules
     *
     * @return list of native modules to register with the newly created catalyst instance
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    /**
     * @return list of JS modules to register with the newly created catalyst instance.
     * <p/>
     * IMPORTANT: Note that only modules that needs to be accessible from the native code should be
     * listed here. Also listing a native module here doesn't imply that the JS implementation of it
     * will be automatically included in the JS bundle.
     */
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    /**
     * @param reactContext
     *
     * @return a list of view managers that should be registered with UIManagerModule
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new ReactImageManager());
    }

}