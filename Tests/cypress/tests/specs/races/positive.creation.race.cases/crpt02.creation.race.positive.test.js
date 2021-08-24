const filePath = 'media/test.page.png';

describe('Creation race positive test || Creation race with all required data filled correctly and with jpg/png file', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        App.raceHelper.enterAllRequiredRaceFields();
        App.universalMethods.getFileUploader().attachFile(filePath);
        App.racePage.getCreateButton().click();
    })
    it('After creation race can be found by name', async function () {
        App.racePage.openUrls();
        App.racePage.getSearchPlaceHolder().type(App.universalMethods.RandomData.raceName);
        App.racePage.getFindButton().click();


        App.universalMethods.getTextFromLocator('td>a')
            .then(createdRaceName => {
                expect(createdRaceName)
                    .to.be.equal(App.universalMethods.RandomData.raceName);
            })
    })
})