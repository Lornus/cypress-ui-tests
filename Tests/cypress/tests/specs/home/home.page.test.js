describe('HomePage test', function () {
    describe("All elements on the homepage displayed", function () {
        before(() => {
            App.homePage.openUrls();

        })
        it('Main table elements displayed', function () {

            App.universalMethods.checkTextFromLocator(App.homePage.tableRows, '  Home   Users   Planets   About ')

            App.universalMethods.checkTextFromLocator(App.homePage.fromTableException, ' Races ')

        })


        it('Home page images displayed', function () {
            expect(App.homePage.checkHomeImagesVisible().should('be.visible'));

        })

        it('Text above images displayed', function () {

            expect(App.homePage.getAboveImagesText().should('contain', 'See amazing views of ' +
                'planets on our site for free!',
            ), 'Text above images must be: ' +
                '"See amazing views of planets on our site for free!"');

        })

        it('All each page element are displayed || main page', function () {
            App.universalMethods.DefaultElementsTested();
        })

    })

})
