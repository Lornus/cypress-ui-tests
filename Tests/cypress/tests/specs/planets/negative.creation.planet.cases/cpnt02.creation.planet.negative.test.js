describe('Create planet negative test || name non empty', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })

    describe('Create planet with empty data', function () {

        it(`Creation planet with only name non empty input and without any file added`, function () {

            App.planetsPage.getEnterNameField().type('tp')
            App.planetsPage.getCreateButton().click();
        })
        describe('Expected behaviour', function () {
            it('After clicked on "Create" field "Discoverer" must be focused', function () {
                expect(App.planetsPage.getEnterDiscovererField().should('be.focused'),
                    'Field "Discoverer" must be focused');
            })
        });
    })

    describe('On planet page must be required elements', function () {

        it('All each page element are displayed || on new planet page', async function () {

            await App.repeatableMethods.DefaultElementsTested();

        })

    })
})