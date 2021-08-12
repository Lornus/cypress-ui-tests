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

        it("On each page elements displayed || deleting race from planet page", async function () {
            await App.universalMethods.DefaultElementsTested();
        })

        it('Explanation text above race placeholder displayed', function () {
            expect(cy.get('p')
                    .should('have.text',
                        'Choose race which you want to delete'),
                'Explanation text above race placeholder must be displayed' +
                'with text "Choose race which you want to delete"');
        })

        it('Placeholder with races displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabled('[placeholder="Choose race"]');
        })

        it('Delete button displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabled('[class="create"]');
        })
    })

})