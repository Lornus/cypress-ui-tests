describe('Adding planet to user page test', function () {
    before(function () {
        App.userPage.openUrls();

        cy.get('td>a')
            .eq(0)
            .click();
    })

    it("On each page elements displayed ||Page with users planets", async function () {
        await App.repeatableMethods.DefaultElementsTested();
    })

    it('Table with planets displayed', function () {
        expect(cy.get('tbody')
                .should('be.visible')
            , 'Table with planets must displayed');
    })

    it('Add planet button displayed', function () {
        App.repeatableMethods.elementVisibleAndEnabled('[value="Add planet"]');
    })

    it('Delete planet button displayed', function () {
        App.repeatableMethods.elementVisibleAndEnabled('[value="Delete planet"]');
    })

})