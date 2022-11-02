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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[@type\u003d\u0027text\u0027])[21]\"}\n  (Session info: chrome\u003d107.0.5304.87)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027DESKTOP-1TEHGD1\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5a86f249130c65cb95eb6e3944fbdff4, findElement {using\u003dxpath, value\u003d(//*[@type\u003d\u0027text\u0027])[21]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.87, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\mohanraj\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55774}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55774/devtoo..., se:cdpVersion: 107.0.5304.87, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5a86f249130c65cb95eb6e3944fbdff4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat org.commonaction.CommonActions.insertText(CommonActions.java:75)\r\n\tat org.stepdefinition.LoginStepDefinition.user_enter_username_and_password_as(LoginStepDefinition.java:33)\r\n\tat ✽.user enter username and password as \"9791187182\" \"9003049466\"(src/test/resources/Feature/FlipkartLogin.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Login button and verfies url",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Login_button_and_verfies_url()"
});
formatter.result({
  "status": "skipped"
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