describe('Update race negative test || Enter name and strength', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Update race"]').click();
    })

    it('Enter name, strength and click "Update"', function () {
        cy.get('[name = "name"]').type(App.universalMethods.RandomData.raceName);
        cy.get('[name = "strength"]').type(App.universalMethods.RandomData.raceStrength);

        cy.get('.create').click();
    })

    it('After clicking "Update" field "Intellect" is focused with a warning', function () {
        expect(cy.get('[name = "intellect"]')
                .should('be.focused'),
            'After clicking "Update" field "Intellect" must be focused with a warning');
    })
})