import { Page } from "../../support/page";
import { login } from "../../support/helper/login";
import { dashboardAssertion } from "../../fixtures/dashboard";
import { fillForm } from "../../support/helper/login";


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
    it('Semua informasi produk tampil', () => {
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
    it ('Filter produk berdasarkan ((A to Z), (Z to A), (low to high), (high to low)) lalu Reset filter ke default', () => {
        Page.dashboard.filter.select('az')
        Page.dashboard.filter.select('za')
        Page.dashboard.filter.select('hilo')
        Page.dashboard.filter.select('lohi')
        cy.reload()
        })
    it ('Halaman Cart Kosong', () => {
        Page.dashboard.shoppingCart.click()
        Page.dashboard.listCart.should('not.exist')
        })
    it ('Akses Halaman Checkout sampai menyelesaikan checkout', () => {
        Page.dashboard.addToCartSauceLabs(product[0]).click();
        Page.dashboard.shoppingCart.click();
        Page.dashboard.checkout.click()
        fillForm(
            dashboardAssertion.CheckOut.FirstName,
            dashboardAssertion.CheckOut.LastName,
            dashboardAssertion.CheckOut.ZipCode
          ); 
        Page.dashboard.continueButton.click() 
        Page.dashboard.finishButton.click()
        cy.contains(dashboardAssertion.thank_you_for_order).should('be.visible').wait(1000)
        Page.dashboard.backHome.click()
    })
})


