describe('Creation race negative test || Creation race without entering a dexterity value and with no uploading file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength, intellect and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.repeatableMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.repeatableMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(App.repeatableMethods.RandomData.raceStrength);

        App.racePage.getCreateButton().click();
    })

    it('“Dexterity” field is focused with a warning about requiring a value of the “Dexterity” field', function () {
        expect(cy.get('[name = "dexterity"]')
                .should('be.focused'),
            '“Dexterity” field must be focused with a ' +
            'warning about requiring a value of the “Dexterity” field');
    })
})