describe('Main information race page', function () {
    before(function () {
        App.racePage.openUrls();
        App.racePage.getAllLinksInTable()
            .eq(0)
            .click();
    })

    it("On each page elements displayed || main information race page", function () {
        App.universalMethods.DefaultElementsTested();
    })

    it('Main title is "Races"', function () {
        App.universalMethods.checkTextFromLocator('.race_ > h1', 'Race');
    })

    it('Race photo displayed', function () {
        cy.get('.race_images')
            .should('be.visible')
            .and('have.attr', 'alt')
            .should('eq', '*Race picture')
    })

    //array of elements on page
    const childs = [1, 2, 3, 4];
    childs.map(child => {
        it(`${child}'st property displayed`, function () {
            cy.get(`div>p:nth-child(${child})`)
                .should('be.visible')
        })
    })

    const buttons = [0, 1, 2];
    buttons.map(buttonIndex => {
        it(` A button with ${buttonIndex} index displayed and enabled`, function () {
            cy.get('form>input')
                .eq(buttonIndex)
                .should('be.visible')
                .and('be.enabled')
        })
    })
})