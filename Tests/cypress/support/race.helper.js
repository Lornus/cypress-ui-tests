class RaceHelper {
    enterAllRequiredRaceFields() {
        cy.get('[name="name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name="strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name="intellect"]').type(App.universalMethods.RandomData.raceIntellect);
        cy.get('[name="dexterity"]').type(App.universalMethods.RandomData.raceDexterity);
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

module.exports = new RaceHelper()