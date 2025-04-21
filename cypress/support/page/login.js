
export default class LoginPage {

    username = (your_username) => 
        cy.get('[data-test="username"]').type(your_username)
    
    password = (your_password) =>
        cy.get('input[name="password"]').type(your_password)

    loginButton = () =>
        cy.get('[data-test="login-button"]').click()

    loginAssertion(assertion) {
        cy.contains(assertion, { timeout: 5000 }).should('be.visible')
    }

}