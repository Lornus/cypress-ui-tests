describe('About page test', function () {
    before(function () {
        App.aboutPage.openUrls();
    })

    it('All each page element are displayed || about page', async function () {
        await App.repeatableMethods.DefaultElementsTested();
    })

    it('Main title "About" displayed', function () {
        expect(cy.get(App.aboutPage.mainTitle)
                .should('be.visible'),
            'Main title must be displayed');
    })

    it('Main text matched with requirements', function () {
        expect(cy.get('p')
                .should('have.text'
                    , 'About: You can use our site for searching, adding and deleting planets. Site was developed by loser.'),
            'Main text must match ' +
            'with "About: You can use our site for searching, adding and deleting planets. Site was developed by loser."');
    })

})
