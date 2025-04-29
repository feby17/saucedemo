import { Page } from "../../support/page";
import { login } from "../../support/helper/login";
import { dashboardAssertion } from "../../fixtures/dashboard";
// import 'cypress-real-events/support';


const product = ["backpack","bike-light","bolt-t-shirt","fleece-jacket","onesie"]

describe('Dashboard', () => {
    beforeEach(() => {
    login()
    })
    it ('Tombol "Add to cart" berfungsi', () => {
       Page.dashboard.addToCartSauceLabs(product[0]).click();
       Page.dashboard.removeButton(product[0]).should('be.visible')
       Page.dashboard.shoppingCart.should('have.text', '1')
    })
    it ('Badge keranjang bertambah setelah Add', () => {
        product.slice(0, 2).forEach((prod) => {
            Page.dashboard.addToCartSauceLabs(prod).click();
            Page.dashboard.removeButton(prod).should('be.visible')
        });
        Page.dashboard.shoppingCart.should('have.text', '2')
    })
    it ('Akses halaman produk tanpa login', () => {
        Page.dashboard.burgerMenu.click()
        Page.dashboard.logout.click()
        cy.visit('/inventory.html',{ failOnStatusCode: false })
        })
    it ('Navigasi ke halaman detail produk', () => {
        Page.dashboard.jaketFleece.click()
        Page.dashboard.dashboardAssertion(dashboardAssertion.detail).should('be.visible')
        })
    it('Navigasi ke halaman detail produk', () => {
        product.forEach((prod) => {
            Page.dashboard.img(prod).should('be.visible');
        });
            dashboardAssertion.Description.forEach((_, i) => {
                Page.dashboard.dashboardAssertion(dashboardAssertion.Description[i]).should('be.visible');
                Page.dashboard.dashboardAssertion(dashboardAssertion.Price[i]).should('be.visible');
                Page.dashboard.dashboardAssertion(dashboardAssertion.Product_name[i]).should('be.visible');
            });
        });
    it ('Tombol "Remove" berfungsi', () => {
        Page.dashboard.addToCartSauceLabs(product[0]).click();
        Page.dashboard.removeButton(product[0]).should('be.visible')
        Page.dashboard.shoppingCart.should('have.text', '1')
        Page.dashboard.removeButton(product[0]).click()
        Page.dashboard.addToCartSauceLabs(product[0]).should('be.visible')
        Page.dashboard.shoppingCart.should('have.text', '')
        })
    it ('Klik Add–Remove cepat berkali-kali', () => {
        
        for (let i = 0; i < 30; i++) {
        Page.dashboard.addToCartSauceLabs(product[0]).click();
        Page.dashboard.removeButton(product[0]).click()
        }
    })
    // it.only ('Gambar produk gagal dimuat', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Klik Add to cart tanpa data', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Filter produk berdasarkan harga (High to Low)', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Filter produk berdasarkan harga (Low to High)', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Filter produk berdasarkan nama (Z to A)', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Filter produk berdasarkan nama (A to Z)', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Reset filter ke default', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Halaman Cart Kosong', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
    // it.only ('Akses Halaman Checkout sampai menyelesaikan checkout', () => {
    //     Page.dashboard.burgerMenu.click()
    //     Page.dashboard.logout.click()
    //     cy.visit('/inventory.html',{ failOnStatusCode: false })
    //     })
})


