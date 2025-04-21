
export default class LoginPage {

    username = (username) => 
        cy.get('[data-test="username"]').type(username)
    
    password = (password) =>
        cy.get('input[name="password"]').type(password)

    loginButton = () =>
        cy.get('[data-test="login-button"]').click()

    loginAssertion(assertion) {
        cy.contains(assertion, { timeout: 5000 }).should('be.visible')
    }

}