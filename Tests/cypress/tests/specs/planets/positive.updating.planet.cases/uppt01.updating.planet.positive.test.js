describe('Update planet`s required fields positive test || All required data entered correctly', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click();

        cy.get('[value="Update planet"]')
            .click();

    })

    it('Enter all required data', function () {

        App.planetsPage.clearAllPlanetsRequiredFields();

        App.planetsPage.enterAllPlanetsRequiredFields();

        cy.get(App.planetsPage.updateButton).click();
    })

    it('Updating properties of planet displayed', function () {
        const randomData = App.universalMethods.RandomData

        App.planetsPage.checkPlanetPropertiesDisplayed(randomData.planetName, randomData.planetDiscoverer,
            randomData.planetSats, randomData.planetMass);
        App.planetsPage.checkPlanetButtons();
    })
})