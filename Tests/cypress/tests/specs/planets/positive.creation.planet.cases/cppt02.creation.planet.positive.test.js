describe('Create planet positive test || all required data + no uploading file', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet with all correct required inputs', function () {

        App.planetsPage.enterAllPlanetsRequiredFields();

        App.planetsPage.getCreateButton().click();
    })

    it('On page of created planet is planet information', function () {

        const randomData = App.universalMethods.RandomData;

        App.planetsPage.checkPlanetPropertiesDisplayed(randomData.planetName, randomData.planetDiscoverer,
            randomData.planetSats, randomData.planetMass);
        App.planetsPage.checkPlanetButtons();

    })

    it("New planet is existing in table", function () {
        const randomData = App.universalMethods.RandomData;

        App.planetsPage.checkNewPlanetAddedToBd(randomData.planetName);
    })
})