describe('Creation race negative test || Creation race with entering the negative dexterity value', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength, intellect, dexterity and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(App.universalMethods.RandomData.raceIntellect);
        cy.get('[name = "dexterity"]').type(-1);

        App.racePage.getCreateButton().click();
    })

    it('“Dexterity” field is focused with a warning about incorrect value of “Dexterity” field', function () {
        App.universalMethods.checkFieldIsFocused('dexterity');

    })
})