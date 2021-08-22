describe('Update planet`s required fields positive test || Left all data originally', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls();
    })

    it('Name in the table planet === name on the update page', function () {

        const testPlanetInTable = App.universalMethods.getTextFromLocator('tbody>tr:nth-child(3) a');

        cy.get(App.planetsPage.planetFromTable)
            .eq(1).click();


        cy.get('[value="Update planet"]')
            .click();

        cy.get(App.planetsPage.updateButton).click();

        const planetNameOnUpdatePage = App.universalMethods.getTextFromLocator(':nth-child(1) > em');

        expect(Boolean(Boolean(testPlanetInTable == planetNameOnUpdatePage)), 'Without changing anything in update page,' +
            ' name in table must be === with name on update page').to.be.true;
    })
})