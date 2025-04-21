import { Page } from "../../support/page";
import { loginTestCases } from "../../support/data/loginData";
import { login_assertion } from "../../fixtures/login";

describe('Login Suite - Data Driven', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  loginTestCases.forEach((testCase) => {
    it(testCase.title, () => {
      if (testCase.username) Page.login.username(testCase.username);
      if (testCase.password) Page.login.password(testCase.password);
      
      Page.login.loginButton();

      const assertionValue = login_assertion[testCase.assertionKey];
      Page.login.loginAssertion(assertionValue);
    });
  });
});