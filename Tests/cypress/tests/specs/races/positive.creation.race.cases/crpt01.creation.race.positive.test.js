describe('Creation race positive test || \t\n' +
    'Creation race with all required data filled correctly (name, strength, intellect, dexterity)', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        App.repeatableMethods.enterAllRequiredRaceFields();
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