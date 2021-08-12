import {BaseMethods} from '../base.methods';

class PlanetsPages extends BaseMethods {

    planetsPageUrl = '/planets';
    mainText = 'body>h1';
    searchPlaceHolder = '[type="text"]';
    findButton = '.find';
    planetFromTable = 'td>a';
    noPlanets = 'tr>td';
    table = 'tbody';
    searchFor = 'div >p + p';
    goButton = '.Goto';
    pageNumber = '[name = "page"]';
    previousLinkPage = '.pagination > a:nth-of-type(1)';
    currentPage = '.pagination > a:nth-of-type(2)';
    nextLinkPage = '.pagination > a:nth-of-type(3)';
    createButton = '.create';
    enterName = '[name="name"]';
    enterDiscoverer = '[name="discoverer"]';
    enterSats = '[name="sat"]';
    enterMass = '[name="mass"]';
    fileUploader = '.photo';
    updateButton = '[value = "Update planet"]';

    get planetPages() {
        return [1, 2, 3]
    }

    openUrls() {
        super.openUrls(this.planetsPageUrl);
    }

    getSearchPlaceHolder() {
        return cy.get(this.searchPlaceHolder);
    }

    getFindButton() {
        return cy.get(this.findButton);
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

    getEnterNameField() {
        return cy.get(this.enterName);
    }

    getEnterDiscovererField() {
        return cy.get(this.enterDiscoverer);
    }

    getEnterSatsField() {
        return cy.get(this.enterSats);
    }

    getEnterMassField() {
        return cy.get(this.enterMass);
    }

    clearAllPlanetsRequiredFields() {
        App.planetsPage.getEnterNameField().clear()
        App.planetsPage.getEnterDiscovererField().clear()

        App.planetsPage.getEnterSatsField().clear()
        App.planetsPage.getEnterMassField().clear()
    }

    enterAllPlanetsRequiredFields() {
        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.universalMethods.RandomData.planetDiscoverer);

        App.planetsPage.getEnterSatsField().type(App.universalMethods.RandomData.planetSats).trigger('change');
        App.planetsPage.getEnterMassField().type(App.universalMethods.RandomData.planetMass).trigger('change');
    }

    checkPlanetButtons() {
        it("Buttons on created planet's page are displayed", function () {

            expect(cy.get('[value="Add race"]').should('be.visible')
                .and('be.enabled'))

            expect(cy.get('[value="Delete race"]').should('be.visible')
                .and('be.enabled'))

            expect(cy.get('[value="Update planet"]').should('be.visible')
                .and('be.enabled'))

            expect(cy.get('[value="Delete planet"]').should('be.visible')
                .and('be.enabled'))

            expect(cy.get('[value="Update planet photo"]').should('be.visible')
                .and('be.enabled'))

        })
    }

    checkNewPlanetAddedToBd(planet) {

        App.planetsPage.openUrls();
        App.planetsPage.getSearchPlaceHolder().type(planet);
        App.planetsPage.getFindButton().click();
    }

    checkPlanetPropertiesDisplayed(name, discoverer, sats, mass) {

        expect(cy.get('.planet_ > h1').should('have.text', 'Planet'),
            'Above planet name must be h1 "Planet"');

        expect(cy.get('.planet_images').invoke('attr', 'alt').should('eq',
            '*Planet picture',
            'Alt of picture must be "*Planet picture"')
        );

        expect(cy.get('.planet_images').and('be.visible'),
            'Image of planet must be visible');


        expect(cy.get('.add>p:nth-child(1)').should('contain', `Planet: ${name}`),
            `On new page must be field: Planet: ${name}`);

        expect(cy.get('.add>p:nth-child(2)').should('contain', `Discoverer: ${discoverer}`),
            `On new page must be field: Discoverer: ${discoverer}`);

        expect(cy.get('.add>p:nth-child(3)').should('contain', `Sat's: ${sats}`),
            `On new page must be field: Sat's: : ${sats}`);

        expect(cy.get('.add>p:nth-child(4)').should('contain', `Mass: ${mass}`),
            `On new page must be field: Mass: : ${mass}`);

        expect(cy.get('.p_races').should('have.text', 'Races who live on planet'));

    }
}

module.exports = new PlanetsPages();
