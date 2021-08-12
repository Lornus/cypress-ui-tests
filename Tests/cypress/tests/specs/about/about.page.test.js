describe('About page test', function () {
    before(function () {
        App.aboutPage.openUrls();
    })

    it('All each page element are displayed || about page', function () {
        App.universalMethods.DefaultElementsTested();
    })

    it('Main title "About" displayed', function () {
        expect(cy.get(App.aboutPage.mainTitle)
                .should('be.visible'),
            'Main title must be displayed');
    })

    it('Main text matched with requirements',  function () {
        App.universalMethods.checkTextFromLocator('p',
            'About: You can use our site for searching, adding and deleting planets. Site was developed by loser.')
    })
})
