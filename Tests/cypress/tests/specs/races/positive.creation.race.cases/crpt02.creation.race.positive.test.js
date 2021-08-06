const filePath = 'media/test.page.png';

describe('Creation race positive test || Creation race with all required data filled correctly (name, strength, intellect, dexterity) and with jpg/png file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        App.repeatableMethods.enterAllRequiredRaceFields();
        App.repeatableMethods.getFileUploader().attachFile(filePath);
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