describe('Deleting race from planet page test', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click();

        cy.get('[value="Delete race"]')
            .click();
    })

    describe('All required elements displayed', function () {

        it("On each page elements displayed || deleting race from planet page",  function () {
             App.universalMethods.DefaultElementsTested();
        })

        it('Explanation text above race placeholder displayed', function () {
           App.universalMethods.checkTextFromLocator('p', 'Choose race which you want to delete')
        })

        it('Placeholder with races displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledBySelector('[placeholder="Choose race"]');
        })

        it('Delete button displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledBySelector('[class="create"]');
        })
    })

})