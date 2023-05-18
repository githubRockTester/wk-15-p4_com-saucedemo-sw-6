$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13375683001,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should login successful with valid credentials",
  "description": "",
  "id": "login-page-test;user-should-login-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see text Products",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 641322599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 430861200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 381181700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeTextProducts()"
});
formatter.result({
  "duration": 142684200,
  "status": "passed"
});
formatter.after({
  "duration": 1597206600,
  "status": "passed"
});
});