describe('Creation race negative test || Creation race without entering a dexterity value and with no uploading file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength, intellect and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(App.universalMethods.RandomData.raceStrength);

        App.racePage.getCreateButton().click();
    })

    it('“Dexterity” field is focused with a warning about requiring a value of the “Dexterity” field', function () {
        App.universalMethods.checkFieldIsFocused('dexterity');

    })
})