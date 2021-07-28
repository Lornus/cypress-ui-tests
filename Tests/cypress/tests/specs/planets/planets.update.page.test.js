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

        it('On each page elements are displayed || update page', async function () {
            await App.repeatableMethods.DefaultElementsTested();
        })

        it('"Update planet" button is displayed correctly', function () {
            expect(cy.get(App.planetsPage.updateButton)
                    .should('be.enabled'),
                '"Update button" must be enabled')
        })

        describe('All input fields are displayed', function () {

            it('Name and Discoverer fields displayed correctly', function () {

                const typeString = [App.planetsPage.enterName, App.planetsPage.enterDiscoverer]
                typeString.map(element => {
                    expect(cy.get(element).should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'type')
                        .should('eq', 'text'), 'Field to enter name must be visible' +
                        'enabled and have type name')

                });
            })

            it('"Sats" field displayed correctly', function () {

                expect(App.planetsPage.getEnterSatsField().should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'max')
                        .should('eq', '10000000000'),
                    'Field to enter sats must be visible' +
                    'enabled and have max attr 10000000000');

                expect(App.planetsPage.getEnterSatsField().should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'min')
                        .should('eq', '0'),
                    'Field to enter sats must be visible' +
                    'enabled and have min attr 0');

            })

            it('"Mass" field displayed correctly', function () {

                expect(App.planetsPage.getEnterMassField().should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'max')
                        .should('eq', '100000000000'),
                    'Field to enter sats must be visible' +
                    'enabled and have max attr 10000000000');


                expect(App.planetsPage.getEnterMassField().should('be.visible')
                        .and('be.enabled')
                        .invoke("attr", 'min')
                        .should('eq', '1500000'),
                    'Field to enter sats must be visible' +
                    'enabled and have min attr 1500000');

            })
        })
    })
})