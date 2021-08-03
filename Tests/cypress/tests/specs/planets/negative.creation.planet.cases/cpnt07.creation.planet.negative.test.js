const filePath = 'planets.fixtures/media/upload.test.file.json';

describe('Create planet negative test || all required data entered + json file upload', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })

    it('Create planet with all correct inputs and non jpg/jpeg file added', function () {

        App.repeatableMethods.enterAllRequiredFields()

        App.planetsPage.getFileUploader().attachFile(filePath);
        App.planetsPage.getFileUploader().click();

        App.planetsPage.getCreateButton().click();
    })


    it('Button "Choose file" is focused with warning', function () {

        expect(App.planetsPage.getFileUploader().focused(), 'After clicking on "Add planet"' +
            'with non valid file format must be warning and "Choose file" must be focused')

    })
})