describe('Update race negative test || Strength is negative', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();
        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength, intellect and click "Update"', function () {
        cy.get('[name = "name"]').type(App.repeatableMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(-1);
        cy.get('[name = "intellect"]').type(App.repeatableMethods.RandomData.raceStrength);
        cy.get('[name = "dexterity"]').type(App.repeatableMethods.RandomData.raceDexterity);

        cy.get('.create').click()
    })
    it('After clicking "Update" field "Strength" is focused with a warning', function () {
        expect(cy.get('[name = "strength"]')
                .should('be.focused'),
            'After clicking "Update" field "Strength" must be focused with a warning');
    })
})