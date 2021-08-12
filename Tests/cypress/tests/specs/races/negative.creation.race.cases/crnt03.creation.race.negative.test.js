describe('Creation race negative test || Creation race with entering only name and strength and with no uploading file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);

        App.racePage.getCreateButton().click();
    })

    it('“Intellect” field is focused with a warning about requiring a value of the “Intellect” field', function () {
        expect(cy.get('[name = "intellect"]')
                .should('be.focused'),
            '“Intellect” field must be focused with a ' +
            'warning about requiring a value of the “Intellect” field');
    })
})