package com.awesomeproject.UseNaComponentExample;

import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

/**
 * liuzhenhui 16/4/27.上午11:22
 */
public class UseNaComponentActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     * e.g. "MoviesApp"
     */
    @Override
    protected String getMainComponentName() {
        return "UseNaComponentActivity";
    }

    /**
     * Returns whether dev mode should be enabled. This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return true;
    }

    /**
     * Returns a list of {@link ReactPackage} used by the app.
     * You'll most likely want to return at least the {@code MainReactPackage}.
     * If your app uses additional views or modules besides the default ones,
     * you'll want to include more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new UseNaComponentPackage());
    }
}
