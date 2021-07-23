import {ElementsOnAllPages} from './elements.on.all.pages'

class PlanetsPage extends ElementsOnAllPages {

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
    enterName = 'br  + input:nth-of-type(1)'
    enterDiscoverer = 'br  + input:nth-of-type(2)'
    enterSats = 'br  + input:nth-of-type(3)'
    enterMass = 'br  + input:nth-of-type(4)'
    enterBrowsePhoto = 'br  + input:nth-of-type(5)'


    openUrls() {
        super.openUrls(this.planetsPageUrl);
    }

    async getMainText() {
        const text = await new Cypress.Promise((resolve) => {
            cy.get(this.mainText)
                .invoke('text')
                .then(txt => {
                    resolve(txt.toString())
                })
        })
        return text
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
    getCreateButton(){
        return cy.get(this.createButton)
    }

    getEnterNameField(){
        return cy.get(this.enterName)
    }
    getEnterDiscovererField(){
        return cy.get(this.enterDiscoverer)
    }
    getEnterSatsField(){
        return cy.get(this.enterSats)
    }
    getEnterMassField(){
        return cy.get(this.enterMass)
    }
    getBrowserPhotoField(){
        return cy.get(this.enterBrowsePhoto)
    }

    async getLinksFromTable(){
        const promises = await new Cypress.Promise((resolve) => {
            cy.get(App.planetsPage.planetFromTable)
                .invoke('text')
                .then(txt => resolve(txt.toString()))
        })
        return promises
    }
}

module.exports = new PlanetsPage()
