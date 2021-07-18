
class Copypasted {

    async getMainText() {
        const mainText = await new Cypress.Promise((resolve) => {
            cy.get('div>h1')
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

    async DefoltElementsTested() {

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
    }
}

 module.exports = new Copypasted()