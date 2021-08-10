describe('Create planet negative test || name non empty', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    it('Create planet with entered name and with no file', function () {

        App.planetsPage.getEnterNameField().type(App.repeatableMethods.RandomData.planetName);
        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" field "Discoverer" must be focused with warning', function () {
        expect(App.planetsPage.getEnterDiscovererField().should('be.focused'),
            'Field "Discoverer" must be focused');
    })
})