import {BaseMethods} from '../base.methods'

class RacesPages extends BaseMethods {
    raceUrl = 'https://npplanets.herokuapp.com/races';
    mainText = 'body>h1';
    searchPlaceHolder = '[type="text"]';
    findButton = '.find';
    noRaces = 'tr>td';
    table = 'tbody';
    firstColumnHeader = 'tr>th:nth-child(1)';
    secondColumnHeader = 'tr>th:nth-child(2)';
    searchFor = 'div >p + p';
    goButton = '.Goto';
    pageNumber = '[name = "page"]';
    previousLinkPage = '.pagination > a:nth-of-type(1)';
    currentPage = '.pagination > a:nth-of-type(2)';
    nextLinkPage = '.pagination > a:nth-of-type(3)';
    createButton = '.create'
    enterName = '[name="name"]';


    openUrls() {
        super.openUrls(this.raceUrl);
    }

    getMainText() {
        return cy.get(this.mainText);
    }

    getSearchPlaceHolder() {
        return cy.get(this.searchPlaceHolder);
    }

    getFindButton() {
        return cy.get(this.findButton);
    }

    getFirstColumnHeader() {
        return cy.get(this.firstColumnHeader);
    }

    getSecondColumnHeader() {
        return cy.get(this.secondColumnHeader);
    }

    getGoButton() {
        return cy.get(this.goButton);
    }

    getPageNumber() {
        return cy.get(this.pageNumber);
    }

    getPreviousLink() {
        return cy.get(this.previousLinkPage);
    }

    getCurrentPageNumber() {
        return cy.get(this.currentPage);
    }

    getNextLink() {
        return cy.get(this.nextLinkPage);
    }

    getCreateButton() {
        return cy.get(this.createButton);
    }

    async writeRacesToJson() {
        //call it only if there is new planets or
        //each time make json file empty
        const path = '../Tests/cypress/fixtures/races.fixtures/all.races.json'
        cy.writeFile(path, {"races": await App.repeatableMethods.getTextFromLocator('td>a')},
            {flag: 'a+'});
    }

    async getCurrentPage() {
        const pageNow = (await App.repeatableMethods.getTextFromLocator('[class="page"]')).slice(0, 1)
        return pageNow

    }

    async getAllPages() {
        const allPages = (await App.repeatableMethods.getTextFromLocator('[class="page"]')).slice(2, 3)
        return allPages
    }

    async getTableRowText() {
        const tableRow = (await App.repeatableMethods.getTextFromLocator('tr>td'))
        return tableRow
    }


}

module.exports = new RacesPages()