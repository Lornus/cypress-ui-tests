describe('Deleting race test', function () {
    before(function () {
        App.racePage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(0)
    })

    it('Getting name of deleting race', function () {
        cy.get(':nth-child(1) > em')
            .invoke('text')
            .as('nameOfRace')
    })

    it('Click on delete button', function () {
        cy.get('[value="Delete race"]').click();
    })

    it("After deleting race doesn't exist", function () {
        App.racePage.openUrls();

        App.racePage.getSearchPlaceHolder().type(this.nameOfRace);
        App.racePage.getFindButton().click();

        App.universalMethods.checkTextFromLocator(App.racePage.noRaces, 'There no races')
    })
})