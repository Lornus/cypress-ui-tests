const randomString = require("randomstring");

class Copypasted {

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

    clearSearchInput(){
        cy.get('[type="text"]').clear()
        cy.get('.find').click()
    }

    typeSearchValue(tString){
        cy.get('[type="text"]').type(tString)
        cy.get('.find').click()
    }cf4r

    randomName(){
        const rname = randomString.generate({length: 6, charset: 'ABCdefgjklmnte'});
        return rname
    }

    randomSats(){
        const planetSats = parseInt(Math.random() * 10000000000 + 0);
        return planetSats
    }
    randomMass(){
        const planetMass = parseInt(Math.random() * (100000000000 - 1500000) + 1500000);
        return planetMass
    }
}

 module.exports = new Copypasted()