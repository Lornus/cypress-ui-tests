const filePath = 'planets.fixtures/media/upload.test.file.json';

describe('Create planet positive test || all required data + json file upload', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })
    after('Deleting new planet', function () {
        cy.get(App.planetsPage.planetFromTable).click()
        cy.get('[value="Delete planet"]').click()
    })

    it('Creation planet with all correct inputs and any file added', function () {

        App.repeatableMethods.enterAllRequiredFields()

        App.planetsPage.getFileUploader().attachFile(filePath);
        App.planetsPage.getFileUploader().click();

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
                const randomData =  App.repeatableMethods.RandomData

                App.repeatableMethods.checkNewPlanetAddedToBd(randomData.planetName);
            })
        })
    })
})