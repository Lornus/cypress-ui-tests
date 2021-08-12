describe('Create planet negative test || mass field getting zero input', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet with 0 in mass', function () {

        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.universalMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField().type(App.universalMethods.RandomData.planetSats);
        App.planetsPage.getEnterMassField().type(0);

        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" field "Mass" is focused with warning', function () {
        expect(App.planetsPage.getEnterMassField().should('be.focused'),
            'Field "Mass" must be focused as it`s warning here ');
    })
})