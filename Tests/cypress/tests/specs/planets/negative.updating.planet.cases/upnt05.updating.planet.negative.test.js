describe('Update planet`s required fields negative test || "Mass" field is empty', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click();

        cy.get('[value="Update planet"]')
            .click();

    })

    it('Click on "Update planet" button', function () {

        App.repeatableMethods.clearAllRequiredFields()
        App.planetsPage.getEnterNameField().type('tp');
        App.planetsPage.getEnterDiscovererField().type('tp');
        App.planetsPage.getEnterSatsField(2).type(2);

        cy.get(App.planetsPage.updateButton).click()
    })
    describe('Expected behaviour', function () {
        it('After clicked on "Create" "Mass" field must be focused and must be warning', function () {
            expect(App.planetsPage.getEnterMassField().should('be.focused'),
                'Field "Mass" must be focused');
        })
    })
})