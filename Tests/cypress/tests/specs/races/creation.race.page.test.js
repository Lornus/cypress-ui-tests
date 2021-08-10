describe('Creation race page test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })
    it("On each page elements displayed || creation race page", async function () {
        await App.repeatableMethods.DefaultElementsTested();
    })

    const fields = ["name", "strength", "intellect", "dexterity"]
    fields.map(field => {
        it(`All required fields displayed || ${field}`, function () {
            App.repeatableMethods.elementVisibleAndEnabled(`[name = ${field}]`);
        })


    })

    it('Photo uploader displayed and enabled', function (){

        expect(App.repeatableMethods.getFileUploader()
            .should('be.visible')
            .and('be.enabled'),
            'Photo uploader must be displayed and be enabled');
    })

    it('Create button displayed and enabled', function (){

        expect(App.racePage.getCreateButton()
                .should('be.visible')
                .and('be.enabled'),
            'Create button must be displayed and be enabled');
    })
})