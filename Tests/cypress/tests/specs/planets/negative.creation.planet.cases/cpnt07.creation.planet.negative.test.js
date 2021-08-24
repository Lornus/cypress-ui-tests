const filePath = 'media/upload.test.file.json';

describe('Create planet negative test || all required data entered + json file upload', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })

    it('Create planet with all correct inputs and non jpg/jpeg file added', function () {

        App.planetsPage.enterAllPlanetsRequiredFields()

        App.universalMethods.getFileUploader().attachFile(filePath);
        App.universalMethods.getFileUploader().click();

        App.planetsPage.getCreateButton().click();
    })

    it('Button "Choose file" is focused with warning', function () {
        App.universalMethods.getFileUploader().should('be.focused')
    })
})