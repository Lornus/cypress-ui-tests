describe('Update race negative test || All required fields are empty', function () {
    before(function () {
        App.racePage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(1)

        cy.get('[value="Update race"]').click();
    })

    it('Miss all inputs and click "Update"', function () {
        cy.get('.create').click();
    })

    it('After clicking "Update" field "Name" is focused with a warning', function () {
        cy.get('[name = "name"]')
                .should('be.focused')
    })
})