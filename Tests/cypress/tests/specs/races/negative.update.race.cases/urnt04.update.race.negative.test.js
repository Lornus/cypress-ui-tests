describe('Update race negative test || Strength is negative', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength, intellect and click "Update"', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(-1);
        cy.get('[name = "intellect"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "dexterity"]').type(App.universalMethods.RandomData.raceDexterity);

        cy.get('.create').click();
    })
    it('After clicking "Update" field "Strength" is focused with a warning', function () {
        App.universalMethods.checkFieldIsFocused('strength');
    })
})