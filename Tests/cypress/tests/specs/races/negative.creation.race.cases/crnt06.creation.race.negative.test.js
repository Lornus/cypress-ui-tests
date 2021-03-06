describe('Creation race negative test || Creation race with entering the negative intellect value', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter name, strength, intellect, dexterity and click on the "Create" button', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(-1);
        cy.get('[name = "dexterity"]').type(App.universalMethods.RandomData.raceDexterity);

        App.racePage.getCreateButton().click();
    })

    it('“Intellect” field is focused with a warning about incorrect value of “Intellect” field', function () {
        App.universalMethods.checkFieldIsFocused('intellect');

    })
})