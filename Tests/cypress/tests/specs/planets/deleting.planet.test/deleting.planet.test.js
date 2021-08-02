
describe('Deleting planet test', function () {
    before(function () {
        App.planetsPage.openUrls()
    })

    it('Delete planet from the last page' +
        '|| there is more than 1 planet to delete on page', function () {

        App.repeatableMethods.clickingOnNextLink()
        const beforeDeleting = App.repeatableMethods.returnRowOfTable()

        App.repeatableMethods.clickingOnPlanetFromTable(0)

        cy.get('[value="Delete planet"]').click()

        App.repeatableMethods.clickingOnNextLink()

        const afterDeleting = App.repeatableMethods.returnRowOfTable()

        expect(beforeDeleting).to.not.be.equal(afterDeleting)

    })
})