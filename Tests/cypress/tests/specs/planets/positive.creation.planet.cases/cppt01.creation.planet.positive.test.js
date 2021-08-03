const filePath = 'planets.fixtures/media/test.page.png';

describe('Create planet positive test || all required data + png file uploaded', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();


    })


    it('Create planet with all correct inputs and png file added', function () {

        App.repeatableMethods.enterAllRequiredFields()

        App.planetsPage.getFileUploader().attachFile(filePath);
        App.planetsPage.getFileUploader().click();

        App.planetsPage.getCreateButton().click();
    })

    it('On page of created planet is planet information', function () {

        const randomData = App.repeatableMethods.RandomData

        App.repeatableMethods.checkPropertiesDisplayed(randomData.planetName, randomData.planetDiscoverer,
            randomData.planetSats, randomData.planetMass);
        App.repeatableMethods.checkPlanetButtons();

    })
    it("New planet is existing in table", function () {
        const randomData = App.repeatableMethods.RandomData

        App.repeatableMethods.checkNewPlanetAddedToBd(randomData.planetName);
    })
})