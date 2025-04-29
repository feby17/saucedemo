export default class DashboardPage {

  addToCartSauceLabs(sauceLabs) {
    return cy.get(`[data-test="add-to-cart-sauce-labs-${sauceLabs}"]`);
  }

  get addToCartSauceLabsBikeLight() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
  }

  removeButton(sauceLabs) {
    return cy.get(`[data-test="remove-sauce-labs-${sauceLabs}"]`)
  }

  get shoppingCart() {
    return cy.get('[data-test="shopping-cart-link"]')
  }

  get burgerMenu() {
    return cy.get('#react-burger-menu-btn')
  }

  get logout() {
    return cy.get('[data-test="logout-sidebar-link"]')
  }
  
  get jaketFleece() {
    return cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]')
  }

  dashboardAssertion(expectedText) {
    return cy.contains(expectedText);
  }

  img (sauceLabs) {
    return cy.get(`[data-test="inventory-item-sauce-labs-${sauceLabs}-img"]`)
  }
} length;

