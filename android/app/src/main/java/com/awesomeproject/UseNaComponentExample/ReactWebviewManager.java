package com.awesomeproject.UseNaComponentExample;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import android.webkit.WebView;

/**
 * liuzhenhui 16/4/27.上午11:31
 */
public class ReactWebviewManager extends SimpleViewManager<ObservableWebView> {
    public static final String REACT_CLASS = "RCTMyWebView";

    /**
     * @return the name of this view manager. This will be the name used to reference this view
     * manager from JavaScript in createReactNativeComponentClass.
     */
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    /**
     * Subclasses should return a new View instance of the proper type.
     *
     * @param reactContext
     */
    @Override
    protected ObservableWebView createViewInstance(ThemedReactContext reactContext) {
        return new ObservableWebView(reactContext);
    }

    @ReactProp(name = "url")
    public void setUrl(WebView view, String url) {
        view.loadUrl(url);
    }

    @ReactProp(name = "html")
    public void setHtml(WebView view, String html) {
        view.loadData(html, "text/html;charset=utf-8", "UTF-8");
    }
}
