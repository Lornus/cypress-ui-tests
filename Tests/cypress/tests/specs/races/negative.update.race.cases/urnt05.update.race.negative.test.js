describe('Update race negative test || Intellect is negative', function () {
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
        cy.get('[name = "intellect"]').type(-1);
        cy.get('[name = "dexterity"]').type(App.repeatableMethods.RandomData.raceDexterity);

        cy.get('.create').click()
    })
    it('After clicking "Update" field "Intellect" is focused with a warning', function () {
        expect(cy.get('[name = "intellect"]')
                .should('be.focused'),
            'After clicking "Update" field "Intellect" must be focused with a warning');
    })
})