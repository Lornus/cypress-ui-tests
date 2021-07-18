/// <reference type ="cypress" />


describe("All elements on the homepage displayed", function ()  {
    before(() => {
        App.homePage.openUrls()

    })
    it('Main table elements displayed', async function ()  {

        expect(await App.homePage.getTextRowsFromMainTable()).to.equal('  Home   Users   Planets   About ')

        expect(await App.homePage.checkFromTableExceptionDisplayed()).to.equal(' Races ',
            'Due to html 4th row is: "Races"')

    })


    it('Home page images displayed', function ()  {
        expect(App.homePage.checkHomeImagesVisible().should('be.visible'))

    })

    it('Text above images displayed', function ()  {

        expect(App.homePage.getAboveImagesText().should('contain','See amazing views of ' +
            'planets on our site for free!',
        ), 'Text above images must be: ' +
            '"See amazing views of planets on our site for free!"')

    })

    it('All each page element are displayed || main page', async function ()  {

        await App.repeatableMethods.DefoltElementsTested()

    })

})
