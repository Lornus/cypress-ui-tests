describe('Creation race negative test || \t\n' +
    'Creation race with entering the negative strength value\n' +
    '\n', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength, intellect, dexterity and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(-1);
        cy.get('[name = "intellect"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "dexterity"]').type(App.universalMethods.RandomData.raceDexterity);

        App.racePage.getCreateButton().click();
    })

    it('“Strength” field is focused with a warning about incorrect value of “Strength” field', function () {
        App.universalMethods.checkFieldIsFocused('strength');

    })
})