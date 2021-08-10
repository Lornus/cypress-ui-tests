describe('Adding planet to user', function () {
    let existingPlanet;
    before(function () {
        App.planetsPage.openUrls();
        cy.get('td>a')
            .eq(0)
            .invoke('text')
            .then(elem => {
                    existingPlanet = elem.toString();
                    return existingPlanet;
                }
            )

        App.userPage.openUrls();
        cy.get('td>a')
            .eq(0)
            .click();

        cy.get('[value="Add planet"]')
            .click();
    })


    it('Add planet to a user', function () {

        cy.get('select')
            .select(existingPlanet);
        cy.get('[value="Add planet"]')
            .click();
    })

    it('Race is added to a planet', function () {
        expect(cy.get('td>a')
                .should('contain', existingPlanet),
            'Planet must be added to a user');
    })
})