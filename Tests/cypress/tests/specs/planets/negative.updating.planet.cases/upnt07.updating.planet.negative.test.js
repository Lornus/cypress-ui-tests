describe('Update planet negative test || "Mass" amount is negative ', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls()
        cy.get(App.planetsPage.planetFromTable)
            .eq(1)
            .click();

        cy.get('[value="Update planet"]')
            .click();

    })

    it('Click on "Update planet" button', function () {

        App.repeatableMethods.clearAllRequiredFields()
        App.planetsPage.getEnterNameField().type('tp');
        App.planetsPage.getEnterDiscovererField().type('tp');
        App.planetsPage.getEnterSatsField(2).type(App.repeatableMethods.RandomData.planetSats);
        App.planetsPage.getEnterMassField().type(-2);

        cy.get(App.planetsPage.updateButton).click()
    })
    describe('Expected behaviour', function () {
        it('After clicked on "Create" "Sat" field must be focused and must be warning', function () {
            expect(App.planetsPage.getEnterMassField().should('be.focused'),
                '"Mass" field must be focused');
        })
    })
})