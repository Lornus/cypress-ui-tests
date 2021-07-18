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
    getGoButton(){
        return cy.get(this.goButton)
    }
    getPageNumber() {
        return cy.get(this.pageNumber)
    }
}

module.exports = new PlanetsPage()
