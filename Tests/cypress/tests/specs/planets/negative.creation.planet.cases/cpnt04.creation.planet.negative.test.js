describe('Create planet negative test || mass is empty', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet without mass and with no file', function () {

        App.planetsPage.getEnterNameField().type(App.repeatableMethods.RandomData.planetName);
        App.planetsPage.getEnterDiscovererField().type(App.repeatableMethods.RandomData.planetDiscoverer);
        App.planetsPage.getEnterSatsField().type(2)

        App.planetsPage.getCreateButton().click();
    })
    it('After clicked on "Create" field "Mass" is focused with warning', function () {
        expect(App.planetsPage.getEnterMassField().should('be.focused'),
            'Field "Sats" must be focused');
    })
})