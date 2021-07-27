describe('Of creation page tests || "/new?" endpoint', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })
    describe('All elements  displayed', function () {

        it('All each page element are displayed || on planets creation page', async function () {

            await App.repeatableMethods.DefaultElementsTested()

        })

        it('Text type fields displayed correctly', function () {

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

        it('All input fields are required', function () {
            const typeString = [App.planetsPage.enterName, App.planetsPage.enterDiscoverer,
                App.planetsPage.enterSats, App.planetsPage.enterSats];
            typeString.map(element => {
                expect(cy.get(element)
                        .should('have.attr', 'required'),
                    'All input fields must be required')
            });
        })

        it('"Choose file" option is enabled', function () {
            App.planetsPage.getFileUploader().should('be.enabled');
        })
    })
})


