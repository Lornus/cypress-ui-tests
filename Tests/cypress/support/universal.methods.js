const randomString = require("randomstring");

class UniversalMethods {

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

    clearSearchInput() {
        cy.get('[type="text"]').clear()
        cy.get('.find').click()
    }

    typeSearchValue(tString) {
        cy.get('[type="text"]').type(tString)
        cy.get('.find').click()
    }

    checkLogoDisplayed() {
        return cy.get('.logo')
            .invoke('attr', 'alt')
    }

    DefaultElementsTested() {
        cy.get('div>img+h1')
            .invoke('text')
            .then(txt =>
                expect(txt).to.equal('Planets',
                    'Footer test must be: "Planets"'))

        cy.get('.footer')
            .invoke('text')
            .then(txt =>
                expect(txt).to.equal('🔞🔞Planets🔞🔞',
                    'Footer test must be: "🔞🔞Planets🔞🔞"'))

        this.checkLogoDisplayed().should('contain', 'logo')

    }

    clickingOnNextLink(pages) {
        for (let i = 0; i < pages - 1; i++) {
            if (Boolean(expect(cy.get('pagination > a:nth-of-type(3)')
                .should('not.be.disabled')))) {
                cy.get('pagination > a:nth-of-type(3)').click()
                cy.get('tbody')
                    .should('be.visible')
            }

        }
    }

    clickingOnLinkFromTable(linkIndex) {
        cy.get('td>a')
            .eq(linkIndex)
            .click()
    }

    returnRowOfTable() {
        return (cy.get("td")
                .find("a")
                .then(row =>
                    row)
        )
    }

    checkTextFromLocator(locator, text) {
        cy.get(locator)
            .invoke('text')
            .then(txt => {
                expect(txt).to.equal(`${text}`,
                    `${locator} text must be: ${text}`)
            })
    }


    getTextFromLocator(locator) {
        return new Cypress.Promise(function (resolve) {
            cy.get(locator)
                .invoke('text')
                .then(txt => {
                    resolve(txt.toString())
                })
        })
    }

    getFileUploader() {
         return cy.get('.photo')
    }

    elementVisibleAndEnabledBySelector(element) {
        cy.get(element)
            .should('be.visible')
            .and('be.enabled')
    }

    elementVisibleAndEnabledByCyGet(element){
        element.should('be.visible')
            .and('be.enabled')
    }

    checkFieldIsFocused(field) {
        cy.get(`[name = "${field}"]`)
            .should('be.focused')
    }
}

module.exports = new UniversalMethods();