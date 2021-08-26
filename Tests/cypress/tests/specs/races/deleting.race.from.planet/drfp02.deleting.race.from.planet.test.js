describe("Deleting race from planet || planet doesn't hase races to delete", function () {
    before(function () {
        App.planetsPage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(1)

        cy.get('[value="Delete race"]')
            .click();
    })

    it('Deleting "nothing"', function () {
        cy.get('[value="Delete race"]')
            .click();
    })

    it('After deleting "There no races" remains', function () {
       App.universalMethods.checkTextFromLocator('td', 'There no races')
    })
})