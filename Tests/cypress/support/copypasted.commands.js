const randomString = require("randomstring");


class Copypasted {

    get pages() {
        return [1, 2,3]
    }

    RandomData = {
        planetName: randomString.generate({length: 6, charset: 'ABCdefgjklmnte'}),
        planetDiscoverer: randomString.generate({length: 6, charset: 'ABCdefgjklmnte'}),
        planetSats: parseInt(Math.random() * 10000000000 + 0),
        planetMass: parseInt(Math.random() * (100000000000 - 1500000) + 1500000)
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


    checkPropertiesDisplayed(name, discoverer, sats, mass) {

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

    enterAllRequiredFields() {
        App.planetsPage.getEnterNameField().type(this.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(this.RandomData.planetDiscoverer);

        App.planetsPage.getEnterSatsField().type(this.RandomData.planetSats).trigger('change');
        App.planetsPage.getEnterMassField().type(this.RandomData.planetMass).trigger('change');
    }

    clearAllRequiredFields() {
        App.planetsPage.getEnterNameField().clear()
        App.planetsPage.getEnterDiscovererField().clear()

        App.planetsPage.getEnterSatsField().clear()
        App.planetsPage.getEnterMassField().clear()
    }

    clickingOnNextLink() {
        for (let i = 0; i < this.pages - 1; i++) {
            if (Boolean(expect(App.planetsPage.getNextLink()
                .should('not.be.disabled')))) {
                App.planetsPage.getNextLink().click()
                expect(cy.get(App.planetsPage.table)
                    .should('be.visible'), 'On each page must be visible' +
                    ' table with created planets')
            }
        }
    }

    clickingOnPlanetFromTable(equals) {

        cy.get(App.planetsPage.planetFromTable)
            .eq(equals)
            .click()
    }

    returnRowOfTable() {
        const row = cy.get("td")
            .find("a")
            .then(row =>
                row);
        return row
    }
}

module.exports = new Copypasted()