describe('Update race page test', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(1)
            .click();
        cy.get('[value="Update race"]').click();
    })

    describe('All required elements displayed', function () {

        it("On each page elements displayed || update race page", async function () {
            await App.repeatableMethods.DefaultElementsTested();
        })

        const fields = ["name", "strength", "intellect", "dexterity"];
        fields.map(field => {
            it(`All required fields displayed || ${field}`, function () {
                expect(cy.get(`[name = ${field}]`)
                        .should('be.visible')
                        .and('be.enabled'),
                    'All required fields must be displayed and enabled');
            })
        })

        it('Update button displayed', function () {
            expect(cy.get('.create')
                    .should('be.visible')
                    .and('be.enabled'),
                'Update button must be displayed and be enabled');
        })
    })
})