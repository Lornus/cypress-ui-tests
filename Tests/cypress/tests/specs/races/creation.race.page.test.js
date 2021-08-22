describe('Creation race page test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getCreateButton().click();
    })
    it("On each page elements displayed || creation race page",  function () {
         App.universalMethods.DefaultElementsTested();
    })

    const fields = ["name", "strength", "intellect", "dexterity"]
    fields.map(field => {
        it(`All required fields displayed || ${field}`, function () {
            App.universalMethods.elementVisibleAndEnabled(`[name = ${field}]`);
        })


    })

    it('Photo uploader displayed and enabled', function (){
        App.universalMethods.elementVisibleAndEnabled('.photo')
    })

    it('Create button displayed and enabled', function (){
        App.universalMethods.elementVisibleAndEnabled(App.racePage.createButton)

    })
})