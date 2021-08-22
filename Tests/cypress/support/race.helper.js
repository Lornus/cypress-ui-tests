class RaceHelper {
    enterAllRequiredRaceFields() {
        cy.get('[name="name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name="strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name="intellect"]').type(App.universalMethods.RandomData.raceIntellect);
        cy.get('[name="dexterity"]').type(App.universalMethods.RandomData.raceDexterity);
    }

    checkRacePropertiesDisplayed(name, strength, intellect, dexterity) {

        cy.get('.race_> h1').should('have.text', 'Race')

        cy.get('.race_images').invoke('attr', 'alt').should('eq',
            '*Race picture')

        cy.get('.race_images').and('be.visible')


        cy.get('.add>p:nth-child(1)').should('contain', `Race ${name}`)

        cy.get('.add>p:nth-child(2)').should('contain', `Strength ${strength}`)

        cy.get('.add>p:nth-child(3)').should('contain', `Intellect ${intellect}`)

        cy.get('.add>p:nth-child(4)').should('contain', `Dexterity ${dexterity}`)

    }
}

module.exports = new RaceHelper()