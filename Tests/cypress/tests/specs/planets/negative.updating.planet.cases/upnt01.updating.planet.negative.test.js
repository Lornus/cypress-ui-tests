describe('Update planet`s required fields negative test || All required data empty', function () {
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
        cy.get(App.planetsPage.updateButton).click()
    })
    it('After clicked on "Create" "Name" field is focused with warning', function () {
        expect(App.planetsPage.getEnterNameField().should('be.focused'),
            'Field "Name" must be focused');
    })
})