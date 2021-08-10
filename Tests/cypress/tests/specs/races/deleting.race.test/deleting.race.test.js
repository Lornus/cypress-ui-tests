describe('Deleting race test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click();
    })

    let text = null
    it('Getting name of deleting race', async function () {
        text = await App.repeatableMethods.getTextFromLocator(':nth-child(1) > em');

    })

    it('Click on delete button', function () {
        cy.get('[value="Delete race"]').click();
    })

    it("After deleting race doesn't exist", function () {
        App.racePage.openUrls();

        App.racePage.getSearchPlaceHolder().type(text);
        App.racePage.getFindButton().click();

        expect(cy.get(App.racePage.noRaces)
            .should('have.text', 'There no races'));
    })
})