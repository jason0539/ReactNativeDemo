package com.awesomeproject;

import com.awesomeproject.JsCallNaExample.CallNaActivity;
import com.awesomeproject.JsCallNaWithCallbackExample.CallNaWithCbActivity;
import com.awesomeproject.NavigatorExample.NavigatorActivity;
import com.awesomeproject.PartofJsExample.PartofJsActivity;

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
        findViewById(R.id.btn_js_call_na_withcb).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, CallNaWithCbActivity.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.btn_js_navagator).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, NavigatorActivity.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.btn_js_partofjs).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, PartofJsActivity.class);
                startActivity(intent);
            }
        });
    }
}
