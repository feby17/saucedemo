import { Page } from "../../support/page";
import { login_assertion } from "../../fixtures/login";
export function login() {
    cy.visit('/')
    Page.login.username(Cypress.env('standard_user'));
    Page.login.password(Cypress.env('PASSWORD'));   
    Page.login.loginButton();
    Page.login.loginAssertion(login_assertion.Success_Login);
    
    }