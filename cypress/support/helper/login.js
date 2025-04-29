import { Page } from "../../support/page";
import { login_assertion } from "../../fixtures/login";
export function login() {
    cy.visit('/')
        Page.login.username(Cypress.env('standard_user'));
        Page.login.password(Cypress.env('PASSWORD'));   
        Page.login.loginButton();
        Page.login.loginAssertion(login_assertion.Success_Login);
    }

export function fillForm(username, password, zipCode) {
    cy.get('[data-test="firstName"]').type(username);
    cy.get('[data-test="lastName"]').type(password);
    cy.get('[data-test="postalCode"]').type(zipCode);
    }