describe('Create planet positive test || all required data + no uploading file', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Creation planet with all correct required inputs', function () {

        App.repeatableMethods.enterAllRequiredFields()

        App.planetsPage.getCreateButton().click();
    })

    describe('After adding planet expected result', function () {

        it('On page of created planet must be planet information', function () {

            const randomData = App.repeatableMethods.RandomData

            App.repeatableMethods.checkPropertiesDisplayed(randomData.planetName, randomData.planetDiscoverer,
                randomData.planetSats, randomData.planetMass);
            App.repeatableMethods.checkPlanetButtons();

        })

        describe('New planet added to BD', function () {
            it("New planet is existing in table", function () {
                const randomData = App.repeatableMethods.RandomData

                App.repeatableMethods.checkNewPlanetAddedToBd(randomData.planetName);
            })
        })
    })
})