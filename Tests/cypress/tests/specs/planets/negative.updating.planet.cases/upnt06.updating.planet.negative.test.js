describe('Update planet`s required fields negative test || "Sat" amount is negative ', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click();

        cy.get('[value="Update planet"]')
            .click();

    })

    it('Click on "Update planet" button', function () {

        App.repeatableMethods.clearAllPlanetsRequiredFields()
        App.planetsPage.getEnterNameField().type(App.repeatableMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.repeatableMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField(2).type(-5);
        App.planetsPage.getEnterMassField(2).type(App.repeatableMethods.RandomData.planetMass);


        cy.get(App.planetsPage.updateButton).click()
    })
    it('After clicked on "Create" "Sat" field is focused with warning', function () {
        expect(App.planetsPage.getEnterSatsField().should('be.focused'),
            '"Sat" field must be focused');
    })
})