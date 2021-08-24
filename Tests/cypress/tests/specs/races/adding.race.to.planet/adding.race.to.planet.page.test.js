describe('Adding race to planet page test', function () {
    before(function () {
        App.planetsPage.openUrls()
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click();

        cy.get('[value="Add race"]')
            .click();
    })

    describe('All required elements displayed', function () {

        it("On each page elements displayed || adding race from planet page", function () {
            App.universalMethods.DefaultElementsTested();
        })

        it('Explanation text above race placeholder displayed', function () {
            App.universalMethods.checkTextFromLocator('p', 'Choose race(s) which you want to add')

        })

        it('Placeholder with races displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledBySelector('[placeholder="Choose race"]');
        })

        it('Add race button displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledBySelector('[value="Add race"]');
        })
    })

})