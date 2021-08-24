describe('Adding race to a planet', function () {
    before(function () {
        App.racePage.openUrls();
        cy.get('td>a')
            .eq(0)
            .invoke('text')
            .as('existingRace');

        App.planetsPage.openUrls();

        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Add race"]')
            .click();
    })

    it('Add race to a planet', function () {

        cy.get('select')
            .select(this.existingRace);
        cy.get('[value="Add race"]')
            .click();
    })

    it('Race is added to a planet', function () {
        cy.get('td>a')
            .should('contain', this.existingRace)
    })
})