$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/FlipkartLogin.feature");
formatter.feature({
  "name": "Flipkart Functions",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into Flipkart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password as \"9791187182\" \"9003049466\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_username_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button and verfies url",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Login_button_and_verfies_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: arguments[0].ScrollInToView is not a function\n  (Session info: chrome\u003d107.0.5304.88)\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027DESKTOP-1TEHGD1\u0027, ip: \u0027192.168.0.100\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6caca65c9d398baa27d6a58ec1eea980, executeScript {script\u003darguments[0].ScrollInToView(true);, args\u003d[{ELEMENT\u003d1b9116e4-d267-474c-9dee-93dd1110c2ba, element-6066-11e4-a52e-4f735466cecf\u003d1b9116e4-d267-474c-9dee-93dd1110c2ba}]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.88, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\mohanraj\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63812}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63812/devtoo..., se:cdpVersion: 107.0.5304.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6caca65c9d398baa27d6a58ec1eea980\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:481)\r\n\tat org.commonaction.CommonActions.Scrollelement(CommonActions.java:107)\r\n\tat org.stepdefinition.LoginStepDefinition.click_on_Login_button_and_verfies_url(LoginStepDefinition.java:49)\r\n\tat ✽.click on Login button and verfies url(src/test/resources/Feature/FlipkartLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "seach for mobile",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.seach_for_mobile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});