import { login_assertion } from "../../fixtures/login"
import { Page } from "../../support/page"

describe ('Login',() => {
    beforeEach ('',() => {
            cy.visit('/')
        })
    it('Login with standart user', () => {
        Page.login.username(Cypress.env('standard_user'))
        Page.login.password(Cypress.env('password'))
        Page.login.loginButton()
        Page.login.loginAssertion(login_assertion.Success_Login[0,1])
        // cy.get('button[type="submit"]').click() 
        // cy.url().should('include', '/dashboard') 
        // cy.get('.welcome-message').should('contain', 'Welcome') 
    })
    // it('Logout', () => {
    //     cy.get('.logout-button').click() 
    //     cy.url().should('include', '/login') 
    //     cy.get('.login-message').should('contain', 'Please log in') 
    // })  
})