describe('Update race page test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();
        cy.get('[value="Update race"]').click();
    })

    describe('All required elements displayed', function () {

        const fields = ["name", "strength", "intellect", "dexterity"];
        fields.map(field => {
            it(`All required fields displayed || ${field}`, function () {
                App.repeatableMethods.elementVisibleAndEnabled(`[name = ${field}]`);
            })
        })

        it('Update button displayed', function () {
            App.repeatableMethods.elementVisibleAndEnabled('.create');
        })
    })
})