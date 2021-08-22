describe('Updating page test', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click();

        cy.get('[value="Update planet"]')
            .click();

    })

    describe('Required elements are displayed', function () {

        it('On each page elements are displayed || update page', function () {
            App.universalMethods.DefaultElementsTested();
        })

        it('"Update planet" button is displayed correctly', function () {
            cy.get(App.planetsPage.updateButton)
                .should('be.enabled')
        })

        describe('All input fields are displayed', function () {

            it('Name and Discoverer fields displayed correctly', function () {

                const typeString = [App.planetsPage.enterName, App.planetsPage.enterDiscoverer]
                typeString.map(element => {
                    cy.get(element).should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'type')
                        .should('eq', 'text')

                })
            })

            it('"Sats" field displayed correctly', function () {
                App.planetHelper.checkMaxSatsProperty();

                App.planetHelper.checkMinMassProperty();

            })

            it('"Mass" field displayed correctly', function () {
                App.planetHelper.checkMaxMassProperty();

                App.planetHelper.checkMinMassProperty();

            })
        })
    })
})