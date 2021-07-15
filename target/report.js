$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Demologin.feature");
formatter.feature({
  "name": "Automate DemoQA",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC1 Loading DemoQA login page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch DemoQA page",
  "keyword": "Given "
});
formatter.match({
  "location": "Methodclass.launchDemoQAPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name as \"TEP\"",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enter_user_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"tep@2021@\"",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Methodclass.clickLoginButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton id\u003d\"login\" type\u003d\"button\" class\u003d\"btn btn-primary\"\u003e...\u003c/button\u003e is not clickable at point (767, 483). Other element would receive the click: \u003ciframe id\u003d\"google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0\" title\u003d\"3rd party ad content\" name\u003d\"google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0\" width\u003d\"970\" height\u003d\"100\" scrolling\u003d\"no\" marginwidth\u003d\"0\" marginheight\u003d\"0\" frameborder\u003d\"0\" sandbox\u003d\"allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation\" srcdoc\u003d\"\" style\u003d\"border: 0px; vertical-align: bottom;\" data-google-container-id\u003d\"1\" data-load-complete\u003d\"true\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d91.0.4472.124)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPNT8J29\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\rhcho\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51791}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 635f5e951d9a292ccd1acc00d66f5987\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepdef.Methodclass.clickLoginButton(Methodclass.java:57)\r\n\tat ✽.Click login button(file:src/test/java/Feature/Demologin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Navigate to Profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "Methodclass.navigateToProfilePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Tc2 Chek Elements link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch DemoQA page",
  "keyword": "Given "
});
formatter.match({
  "location": "Methodclass.launchDemoQAPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name as \"TEP\"",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enter_user_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"tep@2021@\"",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Methodclass.clickLoginButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton id\u003d\"login\" type\u003d\"button\" class\u003d\"btn btn-primary\"\u003e...\u003c/button\u003e is not clickable at point (767, 483). Other element would receive the click: \u003ciframe id\u003d\"google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0\" title\u003d\"3rd party ad content\" name\u003d\"google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0\" width\u003d\"809\" height\u003d\"100\" scrolling\u003d\"no\" marginwidth\u003d\"0\" marginheight\u003d\"0\" frameborder\u003d\"0\" sandbox\u003d\"allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation\" srcdoc\u003d\"\" style\u003d\"border: 0px; vertical-align: bottom;\" data-google-container-id\u003d\"1\" data-load-complete\u003d\"true\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d91.0.4472.124)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPNT8J29\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\rhcho\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59420}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30fa26b340f7d269c9ce38c660c0eb01\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepdef.Methodclass.clickLoginButton(Methodclass.java:57)\r\n\tat ✽.Click login button(file:src/test/java/Feature/Demologin.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Navigate to Profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "Methodclass.navigateToProfilePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Elements link",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.clickElementsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Text box",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.clickTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter full name",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enterFullName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter email address",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enterEmailAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Current Address",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enterCurrentAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter permanent address",
  "keyword": "And "
});
formatter.match({
  "location": "Methodclass.enterPermanentAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click submit button",
  "keyword": "When "
});
formatter.match({
  "location": "Methodclass.clickSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Display Data",
  "keyword": "Then "
});
formatter.match({
  "location": "Methodclass.displayData()"
});
formatter.result({
  "status": "skipped"
});
});