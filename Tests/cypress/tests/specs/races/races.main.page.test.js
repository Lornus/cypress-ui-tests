describe('Races main page test', function () {
    before(function () {
        App.racePage.openUrls();

    })
    describe('Main elements displayed', function () {

        it("On each page elements displayed || main race page", function () {
            App.universalMethods.DefaultElementsTested();
        })

        it('Main title is "Races"', function () {
            App.racePage.getMainText()
                .should('have.text', 'Races')
        })

        it('Search input displayed and enabled', function () {
            App.racePage.getSearchPlaceHolder()
                .should('be.visible')
                .and('be.enabled')
        })

        it('Find button displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledByCyGet(App.racePage.getFindButton())
        })

        it('First column header is "NAME"', function () {
            App.universalMethods.checkTextFromLocator('tr>th:nth-child(1)', 'NAME')
        })

        it('Second column header is "Strength"', function () {
            App.universalMethods.checkTextFromLocator('tr>th:nth-child(2)', 'Strength')
        })

        it('Any name of race is clickable || At least one race existing', function () {
            App.racePage.getAllLinksInTable()
                .eq(0)
                .should('not.be.disabled');
        })

        it('"Go button" displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledByCyGet(App.racePage.getGoButton())

        })

        it('Navigation page trigger displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledByCyGet(App.racePage.getPageNumber())
        })

        it('Previous link displayed', function () {
            App.racePage.getPreviousLink()
                .should('be.visible')
        })

        it('Next link displayed', function () {
            App.racePage.getNextLink()
                .should('be.visible')
        })

        it('"Create race" button displayed and enabled', function () {
            App.universalMethods.elementVisibleAndEnabledByCyGet(App.racePage.getCreateButton())
        })
    })

    describe('Navigation works correctly', function () {
        afterEach(function () {
            App.racePage.openUrls();
        })

        it('"Go to" with empty page trigger navigates to name=&page=', function () {
            App.racePage.getGoButton().click();
            cy.url().should('contain', `?name=&page=`)
        })

        it(`"Go to" with trigger navigates to name=&page=`, function () {
            App.racePage.racePages.then(arr => {
                arr.map(trigger => {
                    App.racePage.getPageNumber().type(trigger).trigger('change')
                    App.racePage.getGoButton().click();
                    cy.url().should('contain', `?name=&page=${trigger}`)
                })
            })
        })

        it('Navigation to a previous page on the main page',  function () {
            App.racePage.getPreviousLink().should('have.class', 'disabled_link');
        })

        it('Navigation to a next page', function () {

            if (App.racePage.getCurrentPage().then(txt => txt) != App.racePage.getAllPages().then(txt => txt)) {
                App.racePage.getNextLink().should('not.be.disabled')
            } else {
                App.racePage.getNextLink().should('have.class', 'disabled_link')
            }
        })
    })
})