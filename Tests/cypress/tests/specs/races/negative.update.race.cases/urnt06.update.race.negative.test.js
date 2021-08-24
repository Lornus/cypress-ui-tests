describe('Update race negative test || Dexterity is negative', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength, intellect and click "Update"', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(App.universalMethods.RandomData.raceIntellect);
        cy.get('[name = "dexterity"]').type(-1);

        cy.get('.create').click();
    })

    it('After clicking "Update" field "Dexterity" is focused with a warning', function () {
        App.universalMethods.checkFieldIsFocused('dexterity');

    })
})