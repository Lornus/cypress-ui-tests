describe('Deleting planet test', function () {
    before(function () {
        App.planetsPage.openUrls()
    })

    it("Delete planet from the last page " +
        "|| there is more than 1 planet to delete on page", function () {

        const entity = "planets"
        App.repeatableMethods.clickingOnNextLink(App.repeatableMethods.planetPages, entity)
        const beforeDeleting = App.repeatableMethods.returnRowOfTable()

        App.repeatableMethods.clickingOnLinkFromTable(0)

        cy.get('[value="Delete planet"]').click()

        App.repeatableMethods.clickingOnNextLink(App.repeatableMethods.planetPages, entity)

        const afterDeleting = App.repeatableMethods.returnRowOfTable()

        expect(beforeDeleting).to.not.be.equal(afterDeleting)

    })
})