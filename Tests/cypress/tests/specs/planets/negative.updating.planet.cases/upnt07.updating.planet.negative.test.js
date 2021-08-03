describe('Update planet`s required fields negative test || "Mass" amount is negative ', function () {
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
        App.planetsPage.getEnterNameField().type(App.repeatableMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.repeatableMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField(2).type(App.repeatableMethods.RandomData.planetSats);
        App.planetsPage.getEnterMassField().type(-2);

        cy.get(App.planetsPage.updateButton).click()
    })
    it('After clicked on "Create" "Mass" field is focused with warning', function () {
        expect(App.planetsPage.getEnterMassField().should('be.focused'),
            '"Mass" field must be focused');
    })
})