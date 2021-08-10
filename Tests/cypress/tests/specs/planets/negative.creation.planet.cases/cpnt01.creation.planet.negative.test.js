describe('Create planet negative test || all required fields are empty', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })

    it('Create planet with all empty required fields and with no file', function () {

        App.planetsPage.getCreateButton().click();
    })

    it('After clicked on "Create" "Name" field is focused with warning', function () {
        expect(App.planetsPage.getEnterNameField().should('be.focused'),
            'Field "Name" must be focused');
    })
})