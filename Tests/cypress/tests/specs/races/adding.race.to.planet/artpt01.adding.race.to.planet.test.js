describe('Deleting race from planet || planet has races to delete', function () {
    let existingRace;
    before(function () {
        App.racePage.openUrls();
        cy.get('td>a')
            .eq(1)
            .invoke('text')
            .then(elem => {
                    existingRace = elem.toString()
                    return existingRace
                }
            )
        App.planetsPage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();

        cy.get('[value="Add race"]')
            .click();
    })


    it('Add race to a planet', function () {

        cy.get('select')
            .select(existingRace)
        cy.get('[value="Add race"]')
            .click();
    })

    it('Race is added to a planet', function () {
        expect(cy.get('td>a')
                .should('contain', existingRace)
            , 'Race must be deleted from planet');
    })

})