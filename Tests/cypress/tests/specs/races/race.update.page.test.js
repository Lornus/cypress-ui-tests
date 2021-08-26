describe('Update race page test', function () {
    before(function () {
        App.racePage.openUrls();
        App.universalMethods.clickingOnLinkFromTable(1)

        cy.get('[value="Update race"]').click();
    })

    describe('All required elements displayed', function () {

        const fields = ["name", "strength", "intellect", "dexterity"];
        fields.map(field => {
            it(`All required fields displayed || ${field}`, function () {
                App.universalMethods.elementVisibleAndEnabledBySelector(`[name = ${field}]`);
            })
        })

        it('Update button displayed', function () {
            App.universalMethods.elementVisibleAndEnabledBySelector('.create');
        })
    })
})