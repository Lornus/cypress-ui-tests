import {BaseMethods} from '../base.methods';

class RacesPages extends BaseMethods {
    raceUrl = 'https://npplanets.herokuapp.com/races';
    mainText = 'body>h1';
    searchPlaceHolder = '[type="text"]';
    findButton = '.find';
    noRaces = 'tr>td';
    table = 'tbody';
    firstColumnHeader = 'tr>th:nth-child(1)';
    secondColumnHeader = 'tr>th:nth-child(2)';
    goButton = '.Goto';
    pageNumber = '[name = "page"]';
    previousLinkPage = '.pagination > a:nth-of-type(1)';
    nextLinkPage = '.pagination > a:nth-of-type(3)';
    createButton = '.create';


    get racePages() {
        return this.getAllPages().then(txt => new Array(Number(txt)).fill(null).map((it, index) => ++index))
    }

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

    getNextLink() {
        return cy.get(this.nextLinkPage);
    }

    getCreateButton() {
        return cy.get(this.createButton);
    }

     writeRacesToJson() {
        //call it only if there is new planets or
        //each time make json file empty
        const path = '../Tests/cypress/fixtures/races.fixtures/all.races.json'
        cy.writeFile(path, {"races":  App.universalMethods.getTextFromLocator('td>a').then(txt => txt.toString())},
            {flag: 'a+'});
    }

    getCurrentPage() {
        return App.universalMethods.getTextFromLocator('[class="page"]').then(txt => txt.slice(0, 1));
    }

    getAllPages() {
        return App.universalMethods.getTextFromLocator('[class="page"]').then(txt => txt.slice(2, 3));
    }

    getAllLinksInTable() {
        return cy.get('td>a');
    }

}

module.exports = new RacesPages();