describe('Update planet`s required fields negative test || "Sat" amount is negative ', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        App.universalMethods.clickingOnLinkFromTable(1)


        cy.get('[value="Update planet"]')
            .click();

    })

    it('Click on "Update planet" button', function () {
        App.planetsPage.clearAllPlanetsRequiredFields();
        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.universalMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField(2).type(-5);
        App.planetsPage.getEnterMassField(2).type(App.universalMethods.RandomData.planetMass);


        cy.get(App.planetsPage.updateButton).click();
    })

    it('After clicked on "Create" "Sats" field is focused with warning', function () {
        App.universalMethods.checkFieldIsFocused('sat');

    })
})