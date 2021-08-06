const randomString = require("randomstring");


class Copypasted {

    get planetPages() {
        return [1, 2, 3, 4, 5]
    }

    get racePages() {
        return [1, 2]
    }

    RandomData = {
        planetName: randomString.generate({length: 6, charset: 'ABCdefgjklmnte'}),
        planetDiscoverer: randomString.generate({length: 6, charset: 'ABCdefgjklmnte'}),
        planetSats: parseInt(Math.random() * 10000000000 + 0),
        planetMass: parseInt(Math.random() * (100000000000 - 1500000) + 1500000),

        raceName: randomString.generate({length: 6, charset: 'ABCdefgjklmnte'}),
        raceStrength: parseInt(Math.random() * 20 + 0),
        raceIntellect: parseInt(Math.random() * 25 + 0),
        raceDexterity: parseInt(Math.random() * 22 + 0),

    }


    async getMainText() {
        const mainText = await new Cypress.Promise((resolve) => {
            cy.get('div>img+h1')
                .invoke('text')
                .then(txt => resolve(txt.toString()))
        })

        return mainText
    }

    async getFooterText() {
        const text = await new Cypress.Promise((resolve) => {
            cy.get('.footer')
                .invoke('text')
                .then(txt => resolve(txt.toString()))
        })
        return text
    }

    checkLogoDisplayed() {
        const checked = cy.get('.logo')
            .invoke('attr', 'alt')
        if (!checked) cy.log("Logo isn't displayed")
        return checked
    }

    async DefaultElementsTested() {

        expect(await this.getMainText()).to.equal('Planets',
            'Main text must be: "Planets"')

        expect(await this.getFooterText()).to.equal('🔞🔞Planets🔞🔞',
            'Footer test must be: "🔞🔞Planets🔞🔞"')

        expect(this.checkLogoDisplayed().should('contain', 'logo'), 'Alt of logo ' +
            'must be "logo"')

    }

    clearSearchInput() {
        cy.get('[type="text"]').clear()
        cy.get('.find').click()
    }

    typeSearchValue(tString) {
        cy.get('[type="text"]').type(tString)
        cy.get('.find').click()
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

    enterAllPlanetsRequiredFields() {
        App.planetsPage.getEnterNameField().type(this.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(this.RandomData.planetDiscoverer);

        App.planetsPage.getEnterSatsField().type(this.RandomData.planetSats).trigger('change');
        App.planetsPage.getEnterMassField().type(this.RandomData.planetMass).trigger('change');
    }

    clearAllPlanetsRequiredFields() {
        App.planetsPage.getEnterNameField().clear()
        App.planetsPage.getEnterDiscovererField().clear()

        App.planetsPage.getEnterSatsField().clear()
        App.planetsPage.getEnterMassField().clear()
    }

    clickingOnNextLink(pages, entity) {
        for (let i = 0; i < pages - 1; i++) {
            if (Boolean(expect(cy.get('pagination > a:nth-of-type(3)')
                .should('not.be.disabled')))) {
                cy.get('pagination > a:nth-of-type(3)').click()
                expect(cy.get('tbody')
                    .should('be.visible'), `On each page must be visible' +
                    ' table with created ${entity}`)
            }
        }
    }

    clickingOnLinkFromTable(linkIndex) {

        cy.get('td>a')
            .eq(linkIndex)
            .click()
    }

    returnRowOfTable() {
        const row = cy.get("td")
            .find("a")
            .then(row =>
                row);
        if (!row) cy.log("Row can't be find")
        return row
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

    checkMaxSatsProperty() {
        const checkMax = expect(App.planetsPage.getEnterSatsField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'max')
                .should('eq', '10000000000'),
            'Field to enter sats must be visible' +
            'enabled and have max attr 10000000000')
        if (!checkMax) cy.log("Sats field has wrong max attribute or isn't visible")
        return checkMax


    }

    checkMinSatsProperty() {
        const checkMin = expect(App.planetsPage.getEnterSatsField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'min')
                .should('eq', '0'),
            'Field to enter sats must be visible' +
            'enabled and have min attr 0')
        if (!checkMin) cy.log("Sats field has wrong min attribute or isn't visible")
        return checkMin

    }

    checkMaxMassProperty() {
        const checkMax = expect(App.planetsPage.getEnterMassField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'max')
                .should('eq', '100000000000'),
            'Field to enter sats must be visible' +
            'enabled and have max attr 10000000000')
        if (!checkMax) cy.log("Mass field has wrong max attribute or isn't visible")
        return checkMax

    }

    checkMinMassProperty() {
        const checkMin = expect(App.planetsPage.getEnterMassField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'min')
                .should('eq', '1500000'),
            'Field to enter sats must be visible' +
            'enabled and have min attr 1500000')
        if (!checkMin) cy.log("Mass field has wrong min attribute or isn't visible")

        return checkMin
    }
    enterAllRequiredRaceFields() {
        cy.get('[name="name"]').type(App.repeatableMethods.RandomData.raceName);
        cy.get('[name="strength"]').type(App.repeatableMethods.RandomData.raceStrength);
        cy.get('[name="intellect"]').type(App.repeatableMethods.RandomData.raceIntellect);
        cy.get('[name="dexterity"]').type(App.repeatableMethods.RandomData.raceDexterity);
    }

    checkRacePropertiesDisplayed(name, strength, intellect, dexterity) {

        expect(cy.get('.race_> h1').should('have.text', 'Race'),
            'must be h1 "Race"');

        expect(cy.get('.race_images').invoke('attr', 'alt').should('eq',
            '*Race picture',
            'Alt of picture must be "*Race picture"')
        );

        expect(cy.get('.race_images').and('be.visible'),
            'Image of race must be visible');



        expect(cy.get('.add>p:nth-child(1)').should('contain', `Race ${name}`),
            `On page must be field: Race ${name}`);

        expect(cy.get('.add>p:nth-child(2)').should('contain', `Strength ${strength}`),
            `On page must be field: Discoverer ${strength}`);

        expect(cy.get('.add>p:nth-child(3)').should('contain', `Intellect ${intellect}`),
            `On page must be field: Sat' ${intellect}`);

        expect(cy.get('.add>p:nth-child(4)').should('contain', `Dexterity ${dexterity}`),
            `On page must be field: Mass ${dexterity}`);

    }
}

module.exports = new Copypasted()