describe('Create planet negative test || sats field getting negative input', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    describe('Create planet with negative mass and sats amount', function () {

        it(`Input negative amount of sat's and mass`, function () {


            App.planetsPage.getEnterNameField().type('tp');
            App.planetsPage.getEnterDiscovererField().type('tp');
            App.planetsPage.getEnterSatsField().type(-5);
            App.planetsPage.getEnterMassField().type(App.repeatableMethods.RandomData.planetMass);

            App.planetsPage.getCreateButton().click();
        })
        describe('Expected behaviour', function () {
            it('After clicked on "Create" field "Mass" must be focused', function () {
                expect(App.planetsPage.getEnterSatsField().should('be.focused'),
                    'Field "Sats" must be focused');
            })
        })
    })

})