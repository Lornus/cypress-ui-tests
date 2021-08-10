describe('Deleting race from planet || planet has races to delete', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click();
    })

    let checkPlanetHasRace = true;
    let existingRace;

    it("Return true if planet has races, else false", function () {

        cy.get('td')
            .invoke('text')
            .then(text => {
                text.toString();
            })
            .then(check => {
                if (check === "There no races") {
                    cy.log('NO RACES');
                    checkPlanetHasRace = false;
                    return checkPlanetHasRace;
                }
            })
    })

    it('Choose race to delete from planet', function () {
        if (checkPlanetHasRace === true) {
            cy.get('td>a')
                .eq(0)
                .invoke('text')
                .then(elem => {
                        existingRace = elem.toString();
                    }
                )
                .then(() => {
                    cy.get('[value="Delete race"]')
                        .click()
                    cy.get('select')
                        .select(existingRace);
                })
        } else {
            this.skip();
        }
    })

    it('Deleting race after clicking on the "Delete" button', function () {
        if (checkPlanetHasRace === true) {

            cy.get('[value="Delete race"]')
                .click();
        } else {
            this.skip();
        }
    })

    it('Race is deleted from a planet', function () {
        if (checkPlanetHasRace === true) {

            expect(cy.get('td>a')
                    .should('not.contain', existingRace)
                , 'Race must be deleted from planet');
        } else {
            this.skip();
        }
    })
})