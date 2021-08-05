describe('Creation race negative test || \t\n' +
    'Creation race with missing all required inputs and with no uploading file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('CLick on the "Create" button', function () {
        App.racePage.getCreateButton().click();
    })

    it('“Name” field is focused with a warning about requiring a value of the “Name” field', function () {
        expect(cy.get('[name = "name"]')
                .should('be.focused'),
            '“Name” field must be focused with a ' +
            'warning about requiring a value of the “Name” field');
    })
})