describe('Update planet`s required fields negative test || "Sats" field is empty', function () {
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
        App.planetsPage.getEnterMassField(2).type(2);

        cy.get(App.planetsPage.updateButton).click()
    })

    it('After clicked on "Create" "Sats" field is focused with warning', function () {
        App.universalMethods.checkFieldIsFocused('sat');
    })
})