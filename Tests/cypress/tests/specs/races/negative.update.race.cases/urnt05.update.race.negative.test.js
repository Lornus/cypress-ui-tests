describe('Update race negative test || Intellect is negative', function () {
    before(function () {
        App.racePage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(1)

        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength, intellect and click "Update"', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(-1);
        cy.get('[name = "dexterity"]').type(App.universalMethods.RandomData.raceDexterity);

        cy.get('.create').click();
    })

    it('After clicking "Update" field "Intellect" is focused with a warning', function () {
        App.universalMethods.checkFieldIsFocused('intellect');
    })
})