describe('Update planet positive test || Left all data originally', function () {
    before('Click on test planet for updating', function () {
        App.planetsPage.openUrls();

        cy.get('td>a')
            .eq(0)
            .invoke('text')
            .as('planetBeforeUpdate')
    })

    it('Name in the table planet === name on the update page', function () {
        App.universalMethods.clickingOnLinkFromTable(1)


        cy.get(App.planetsPage.updateButton).click()
        cy.get(App.planetsPage.updateButton).click()

        App.universalMethods.checkTextFromLocator(':nth-child(1) > em', this.planetBeforeUpdate)
    })
})