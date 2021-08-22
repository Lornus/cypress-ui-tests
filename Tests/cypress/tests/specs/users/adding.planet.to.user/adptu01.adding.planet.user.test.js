describe('Adding planet to user', function () {
    before(function () {
        App.planetsPage.openUrls();
        cy.get('td>a')
            .eq(0)
            .invoke('text')
            .as('existingPlanet')

        App.userPage.openUrls();
        cy.get('td>a')
            .eq(0)
            .click();

        cy.get('[value="Add planet"]')
            .click();
    })


    it('Add planet to a user', function () {

        cy.get('select')
            .select(this.existingPlanet);
        cy.get('[value="Add planet"]')
            .click();
    })

    it('Race is added to a planet', function () {
        cy.get('td>a')
            .should('contain', this.existingPlanet)
    })
})