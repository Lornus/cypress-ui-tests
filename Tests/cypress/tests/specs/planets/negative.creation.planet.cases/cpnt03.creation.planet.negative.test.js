describe('Create planet negative test || name and discoverer entered', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet with entered name, discoverer and with no file', function () {

        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.universalMethods.RandomData.planetDiscoverer);

        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" field "Sats" is focused with warning', function () {
        App.universalMethods.checkFieldIsFocused('sat');
    })
})