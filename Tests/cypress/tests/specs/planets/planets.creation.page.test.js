describe('Of creation page tests || "/new?" endpoint', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })
    describe('All elements  displayed', function () {

        it('All each page element are displayed || on planets creation page',  function () {

             App.universalMethods.DefaultElementsTested();

        })

        it('Text type fields displayed correctly', function () {

            const typeString = [App.planetsPage.enterName, App.planetsPage.enterDiscoverer]
            typeString.map(element => {
                expect(cy.get(element).should('be.visible')
                    .and('be.enabled')
                    .invoke("attr", 'type')
                    .should('eq', 'text'), 'Field to enter name must be visible' +
                    'enabled and have type name');
            })
        })

        it('"Sats" field displayed correctly', function () {

            App.planetHelper.checkMaxSatsProperty();

            App.planetHelper.checkMinSatsProperty();

            App.planetsPage.clearAllPlanetsRequiredFields();
        })

        it('"Mass" field displayed correctly', function () {

            App.planetHelper.checkMaxMassProperty();

            App.planetHelper.checkMinMassProperty();
        })

        it('All input fields are required', function () {
            const typeString = [App.planetsPage.enterName, App.planetsPage.enterDiscoverer,
                App.planetsPage.enterSats, App.planetsPage.enterSats];
            typeString.map(element => {
                expect(cy.get(element)
                        .should('have.attr', 'required'),
                    'All input fields must be required');
            })
        })

        it('"Choose file" option is enabled', function () {
            App.universalMethods.getFileUploader().should('be.enabled');
        })
    })
})


