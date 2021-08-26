describe('Adding planet to user page test', function () {
    before(function () {
        App.userPage.openUrls();

        App.universalMethods.clickingOnLinkFromTable(0)
    })

    it("On each page elements displayed ||Page with users planets", function () {
        App.universalMethods.DefaultElementsTested();
    })

    it('Table with planets displayed', function () {
        cy.get('tbody')
            .should('be.visible')
    })

    it('Add planet button displayed', function () {
        App.universalMethods.elementVisibleAndEnabledBySelector('[value="Add planet"]');
    })

    it('Delete planet button displayed', function () {
        App.universalMethods.elementVisibleAndEnabledBySelector('[value="Delete planet"]');
    })

})