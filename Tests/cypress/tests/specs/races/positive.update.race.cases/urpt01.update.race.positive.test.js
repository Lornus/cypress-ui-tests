describe('Update race positive test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();
        cy.get('[value="Update race"]').click();
        cy.get('[name = "name"]').clear();
    })
    it('All required fields filled correclty', function () {
        App.raceHelper.enterAllRequiredRaceFields();
        cy.get('.create').click();
    })
    it('After updating planet its props must be visible on the race main info page', function () {

        const rData = App.universalMethods.RandomData;
        App.raceHelper.checkRacePropertiesDisplayed(rData.raceName,
            rData.raceStrength, rData.raceIntellect, rData.raceDexterity);
    })
})