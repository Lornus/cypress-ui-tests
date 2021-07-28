describe('Create planet negative test || mass and sats fields getting negative input', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    describe('Create planet with negative mass and sats amount', function () {

        it(`Input negative amount of sat's and mass`, function () {


            App.planetsPage.getEnterNameField().type(App.repeatableMethods.randomName());
            App.planetsPage.getEnterDiscovererField().type(App.repeatableMethods.randomName());
            App.planetsPage.getEnterSatsField().type(-5);
            App.planetsPage.getEnterMassField().type(-10000000000);

            App.planetsPage.getCreateButton().click();
        })
        describe('Expected behaviour', function () {
            it('After clicked on "Create" field "Mass" must be focused', function () {
                expect(App.planetsPage.getEnterSatsField().should('be.focused'),
                    'Field "Sats" must be focused as it`s earlier in dom than "Mass" field ');
            })
        })
    })

})