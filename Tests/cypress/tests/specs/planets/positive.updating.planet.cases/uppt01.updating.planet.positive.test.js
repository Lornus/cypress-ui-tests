describe('Update planet`s required fields positive test || All required data entered correctly', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click()

        cy.get('[value="Update planet"]')
            .click()

    })

    it('Enter all required data', function () {

        App.repeatableMethods.clearAllRequiredFields()

        App.repeatableMethods.enterAllRequiredFields()

        cy.get(App.planetsPage.updateButton).click()
    })

    describe('Expected result after updating', function () {
        it('Updating properties of planet displayed', function () {
            const randomData = App.repeatableMethods.RandomData

            App.repeatableMethods.checkPropertiesDisplayed(randomData.planetName, randomData.planetDiscoverer,
                randomData.planetSats, randomData.planetMass);
            App.repeatableMethods.checkPlanetButtons();
        })
    })
})