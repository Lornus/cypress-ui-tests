describe('Creation race positive test || all required data filled', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        cy.get('[name="name"]').type(App.repeatableMethods.RandomData.raceName);
        cy.get('[name="strength"]').type(App.repeatableMethods.RandomData.raceStrength);
        cy.get('[name="intellect"]').type(App.repeatableMethods.RandomData.raceIntellect);
        cy.get('[name="dexterity"]').type(App.repeatableMethods.RandomData.raceDexterity);
        App.racePage.getCreateButton().click();
    })
    it('After creation race can be found by name', async function () {
        App.racePage.openUrls();
        App.racePage.getSearchPlaceHolder().type(App.repeatableMethods.RandomData.raceName);
        App.racePage.getFindButton().click();
        expect(await (await App.repeatableMethods.getTextFromLocator('td>a'))
            .includes(App.repeatableMethods.RandomData.raceName));
    })
})