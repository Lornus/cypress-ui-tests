describe('Adding planet to user page test', function () {
    before(function () {
        App.userPage.openUrls();

        cy.get('td>a')
            .eq(0)
            .click();
    })

    it("On each page elements displayed ||Page with users planets", function () {
        App.universalMethods.DefaultElementsTested();
    })

    it('Table with planets displayed', function () {
        cy.get('tbody')
            .should('be.visible')
    })

    it('Add planet button displayed', function () {
        App.universalMethods.elementVisibleAndEnabled('[value="Add planet"]');
    })

    it('Delete planet button displayed', function () {
        App.universalMethods.elementVisibleAndEnabled('[value="Delete planet"]');
    })

})