describe('Adding race to planet page test', function () {
    before(function () {
        App.planetsPage.openUrls()
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click()

        cy.get('[value="Add race"]')
            .click()
    })

    describe('All required elements displayed', function () {

        it("On each page elements displayed || adding race from planet page", async function () {
            await App.repeatableMethods.DefaultElementsTested();
        })

        it('Explanation text above race placeholder displayed', function () {
            expect(cy.get('p')
                    .should('have.text',
                        'Choose race(s) which you want to add'),
                'Explanation text above race placeholder must be displayed' +
                'with text "Choose race(s) which you want to add"')
        })

        it('Placeholder with races displayed and enabled', function () {
            App.repeatableMethods.elementVisibleAndEnabled('[placeholder="Choose race"]')
        })

        it('Add race button displayed and enabled', function () {
            App.repeatableMethods.elementVisibleAndEnabled('[value="Add race"]')
        })

    })

})