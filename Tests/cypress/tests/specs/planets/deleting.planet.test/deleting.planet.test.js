describe('Deleting planet test', function () {
    before(function () {
        App.planetsPage.openUrls();
    })

    it("Delete planet from the last page " +
        "|| there is more than 1 planet to delete on page", function () {

        App.universalMethods.clickingOnNextLink(App.planetsPage.planetPages);
        const beforeDeleting = App.universalMethods.returnRowOfTable();

        App.universalMethods.clickingOnLinkFromTable(0);

        cy.get('[value="Delete planet"]').click();

        App.universalMethods.clickingOnNextLink(App.planetsPage.planetPages);

        const afterDeleting = App.universalMethods.returnRowOfTable();

        expect(beforeDeleting).to.not.be.equal(afterDeleting);

    })
})