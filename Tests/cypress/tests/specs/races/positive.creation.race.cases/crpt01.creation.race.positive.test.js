describe('Creation race positive test || \t\n' +
    'Creation race with all required data filled correctly', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        App.raceHelper.enterAllRequiredRaceFields();
        App.racePage.getCreateButton().click();


    })

    it('After creation race can be found by name', function () {
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