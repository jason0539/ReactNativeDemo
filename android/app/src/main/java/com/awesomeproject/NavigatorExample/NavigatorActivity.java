package com.awesomeproject.NavigatorExample;

import java.util.Arrays;
import java.util.List;

import com.awesomeproject.BuildConfig;
import com.awesomeproject.UseNaComponentExample.UseNaComponentPackage;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

/**
 * liuzhenhui 16/4/23.下午12:50
 */
public class NavigatorActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     * e.g. "MoviesApp"
     */
    @Override
    protected String getMainComponentName() {
        return "NavigatorActivity";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new UseNaComponentPackage()
        );
    }
}
