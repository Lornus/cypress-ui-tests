describe('Creation race negative test || Creation race with entering the only name and with no uploading file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);

        App.racePage.getCreateButton().click();
    })

    it('“Strength” field is focused with a warning about requiring a value of the “Strength” field', function () {
        expect(cy.get('[name = "strength"]')
                .should('be.focused'),
            '“Strength” field must be focused with a ' +
            'warning about requiring a value of the “Strength” field');
    })
})