describe('Update race negative test || Dexterity is negative', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();
        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength, intellect and click "Update"', function () {
        cy.get('[name = "name"]').type(App.repeatableMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.repeatableMethods.RandomData.raceStrength);
        cy.get('[name = "intellect"]').type(App.repeatableMethods.RandomData.raceIntellect);
        cy.get('[name = "dexterity"]').type(-1);

        cy.get('.create').click()
    })
    it('After clicking "Update" field "Dexterity" is focused with a warning', function () {
        expect(cy.get('[name = "dexterity"]')
                .should('be.focused'),
            'After clicking "Update" field "Dexterity" must be focused with a warning');
    })
})