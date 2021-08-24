describe('Create planet negative test || sats field getting negative input', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })


    it('Create planet with negative sats amount', function () {
        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.universalMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField().type(-5);
        App.planetsPage.getEnterMassField().type(App.universalMethods.RandomData.planetMass);

        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" field "Sats" is focused with warning', function () {
        App.universalMethods.checkFieldIsFocused('sat');
    })
})
