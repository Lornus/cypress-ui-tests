const filePath = 'media/upload.test.file.json';

describe('Creation race negative test || Creation race with entering ' +
    'all required data correctly and file with the non-valid format to upload ', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })

    it('Enter all required fields correctly', function () {
        App.raceHelper.enterAllRequiredRaceFields();
        App.universalMethods.getFileUploader().attachFile(filePath);
        App.racePage.getCreateButton().click();
    })

    it('Displayed warning about wrong file format and "Choose file" is focused', function () {
    App.universalMethods.getFileUploader().should('be.focused')

    })
})