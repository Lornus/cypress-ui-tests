const filePath = 'planets.fixtures/media/upload.test.file.json';

describe('Create planet negative test || all required data + json file upload', function () {
    before('Go to the creation page', function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();
    })


    it('Creation planet with all correct inputs and any file added', function () {

        App.repeatableMethods.enterAllRequiredFields()

        App.planetsPage.getFileUploader().attachFile(filePath);
        App.planetsPage.getFileUploader().click();

        App.planetsPage.getCreateButton().click();
    })

    describe('After adding file expected result', function () {

        it('Button "Choose file" must be focused with warning', function () {

            expect(App.planetsPage.getFileUploader().focused(), 'After clicking on "Add planet"' +
                'with non valid file format must be warning and "Choose file" must be focused')

        })


    })
})