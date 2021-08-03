import {BaseMethods} from './base.methods'

class PlanetsPage extends BaseMethods {

    planetsPageUrl = '/planets'
    mainText = 'body>h1'
    searchPlaceHolder = '[type="text"]'
    findButton = '.find'
    planetFromTable = 'td>a'
    noPlanets = 'tr>td'
    table = 'tbody'
    searchFor = 'div >p + p'
    goButton = '.Goto'
    pageNumber = '[name = "page"]'
    previousLinkPage = '.pagination > a:nth-of-type(1)'
    currentPage = '.pagination > a:nth-of-type(2)'
    nextLinkPage = '.pagination > a:nth-of-type(3)'
    createButton = '.create'
    enterName = '[name="name"]'
    enterDiscoverer = '[name="discoverer"]'
    enterSats = '[name="sat"]'
    enterMass = '[name="mass"]'
    fileUploader = '.photo'
    updateButton = '[value = "Update planet"]'

    openUrls() {
        super.openUrls(this.planetsPageUrl);
    }

    getSearchPlaceHolder() {
        return cy.get(this.searchPlaceHolder)
    }

    getFindButton() {
        return cy.get(this.findButton)
    }

    getGoButton() {
        return cy.get(this.goButton)
    }

    getPageNumber() {
        return cy.get(this.pageNumber)
    }

    getPreviousLink() {
        return cy.get(this.previousLinkPage)
    }

    getCurrentPageNumber() {
        return cy.get(this.currentPage)
    }

    getNextLink() {
        return cy.get(this.nextLinkPage)
    }

    getCreateButton() {
        return cy.get(this.createButton)
    }

    getEnterNameField() {
        return cy.get(this.enterName)
    }

    getEnterDiscovererField() {
        return cy.get(this.enterDiscoverer)
    }

    getEnterSatsField() {
        return cy.get(this.enterSats)
    }

    getEnterMassField() {
        return cy.get(this.enterMass)
    }

    async getTextFromLocator(locator) {
        const text = await new Cypress.Promise((resolve) => {
            cy.get(locator)
                .invoke('text')
                .then(txt => resolve(txt.toString()))
        })
        return text
    }

    getFileUploader() {
      return cy.get('.photo')

    }

}

module.exports = new PlanetsPage()
