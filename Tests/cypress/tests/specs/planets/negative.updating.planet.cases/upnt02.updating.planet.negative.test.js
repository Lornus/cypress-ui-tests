describe('Update planet negative test || "Name" field is empty', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click()

        cy.get('[value="Update planet"]')
            .click()

    })

    it('Click on "Update planet" button', function () {

        App.repeatableMethods.clearAllRequiredFields()
        App.planetsPage.getEnterDiscovererField().type('tp');
        App.planetsPage.getEnterMassField(2).type(2)
        App.planetsPage.getEnterSatsField().type(2)

        cy.get(App.planetsPage.updateButton).click()
    })
    describe('Expected behaviour', function () {
        it('After clicked on "Create" "Name" field must be focused and must be warning', function () {
            expect(App.planetsPage.getEnterNameField().should('be.focused'),
                'Field "Name" must be focused');
        })
    })
})