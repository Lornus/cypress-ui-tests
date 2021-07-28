describe('Create planet negative test || mass field getting 0 input', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    describe('Create planet with 0 in mass', function () {

        it(`Input 0 in mass`, function () {


            App.planetsPage.getEnterNameField().type(App.repeatableMethods.randomName());
            App.planetsPage.getEnterDiscovererField().type(App.repeatableMethods.randomName());
            App.planetsPage.getEnterSatsField().type(App.repeatableMethods.randomSats());
            App.planetsPage.getEnterMassField().type(0);

            App.planetsPage.getCreateButton().click();
        })
        describe('Expected behaviour', function () {
            it('After clicked on "Create" field "Mass" must be focused', function () {
                expect(App.planetsPage.getEnterMassField().should('be.focused'),
                    'Field "Mass" must be focused as it`s warning here ');
            })
        })
    })

})