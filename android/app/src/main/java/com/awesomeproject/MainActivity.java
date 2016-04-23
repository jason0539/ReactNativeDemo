package com.awesomeproject;

import com.awesomeproject.JsCallNaDemo.CallNaActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_main);
        findViewById(R.id.btn_js_call_na).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, CallNaActivity.class);
                startActivity(intent);
            }
        });

    }
}
