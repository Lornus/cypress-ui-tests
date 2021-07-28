describe('Create planet negative test || all empty fields', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    describe('Create planet with empty data', function () {

        it(`Creation planet with all empty input and without any file added`, function () {

            App.planetsPage.getCreateButton().click();
        })
        describe('Expected behaviour', function () {
            it('After clicked on "Create" "Name" field must be focused', function () {
                expect(App.planetsPage.getEnterNameField().should('be.focused'),
                    'Field "Name" must be focused');
            })
        });
    })
})