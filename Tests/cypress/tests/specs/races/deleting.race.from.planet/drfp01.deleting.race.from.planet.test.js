describe('Deleting race from planet || planet has races to delete', function () {
    before(function () {
        App.planetsPage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(0)
    })

    let checkPlanetHasRace = true;

    it('Dont go further steps if theres no races', function () {

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
                .as('existingRace')
                .then(() => {
                    cy.get('[value="Delete race"]')
                        .click()
                    cy.get('select')
                        .select(this.existingRace);
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

            cy.get('td')
                .should('not.contain', this.existingRace)
        } else {
            this.skip();
        }
    })
})