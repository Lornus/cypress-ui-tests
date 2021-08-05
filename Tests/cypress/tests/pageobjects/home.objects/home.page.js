import {BaseMethods} from '../base.methods'

class HomePage extends BaseMethods {

    mainHomePageLink = '/'
    tableRows = 'ul>li'
    fromTableException = 'a>li'
    textAboveImages = '.home_text'
    homeImages = '.home_images>img'


    openUrls() {
        super.openUrls(this.mainHomePageLink);
    }

    async getTextRowsFromMainTable() {
        const text = await new Cypress.Promise((resolve) => {
            cy.get(this.tableRows).invoke("text")
                .then(txt => resolve(txt.toString()))
        })
        return text
    }

    async checkFromTableExceptionDisplayed() {
        const textFromException = await new Cypress.Promise((resolve) => {
            cy.get(this.fromTableException)
                .invoke('text')
                .then(txt => resolve(txt.toString()))
        })
        return textFromException
    }

    getAboveImagesText() {
        return cy.get(this.textAboveImages)


    }

    checkHomeImagesVisible() {
        return cy.get(this.homeImages)

    }
}


module.exports = new HomePage()