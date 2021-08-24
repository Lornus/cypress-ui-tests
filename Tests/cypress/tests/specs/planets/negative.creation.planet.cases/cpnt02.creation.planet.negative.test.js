describe('Create planet negative test || name non empty', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet with entered name and with no file', function () {

        App.planetsPage.getEnterNameField().type(App.universalMethods.RandomData.planetName);
        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" field "Discoverer" must be focused with warning', function () {
       App.universalMethods.checkFieldIsFocused('discoverer');
    })
})