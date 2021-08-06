describe('Update race negative test || All required fields are empty', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Update race"]').click();
    })

    it('Miss all inputs and click "Update"', function () {
        cy.get('.create').click();
    })

    it('After clicking "Update" field "Name" is focused with a warning', function () {
        expect(cy.get('[name = "name"]')
                .should('be.focused'),
            'After clicking "Update" field "Name" must be focused with a warning');
    })
})