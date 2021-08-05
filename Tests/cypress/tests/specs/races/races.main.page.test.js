describe('Races main page test', function () {
    before(function () {
        App.racePage.openUrls();

    })
    describe('Main elements displayed', function () {


        it("On each page elements displayed || main race page", async function () {
            await App.repeatableMethods.DefaultElementsTested();
        })

        it('Main title is "Races"', function () {
            expect(App.racePage.getMainText()
                    .should('have.text', 'Races'),
                'Main title should be "Races"');
        })

        it('Search input displayed and enabled', function () {
            expect(App.racePage.getSearchPlaceHolder()
                    .should('be.visible')
                    .and('be.enabled'),
                'Search input should displayed and be enabled');
        })

        it('Find button displayed and enabled', function () {
            expect(App.racePage.getFindButton()
                    .should('be.visible')
                    .and('be.enabled'),
                'Find button should displayed and be enabled');
        })

        it('First column header is "NAME"', function () {
            expect(App.racePage.getFirstColumnHeader()
                    .should('have.text', 'NAME'),
                'First column header is "NAME"');
        })

        it('Second column header is "Strength"', function () {
            expect(App.racePage.getSecondColumnHeader()
                    .should('have.text', 'Strength'),
                'Second column header is "Strength"');
        })

        it('Any name of race is clickable || At least one race existing', function () {
            cy.get('td>a')
                .eq(0)
                .should('not.be.disabled');
        })

        it('"Go button" displayed and enabled', function () {
            expect(App.racePage.getGoButton()
                    .should('be.visible')
                    .and('be.enabled'),
                'Go button should be displayed and be enabled');
        })

        it('Navigation page trigger displayed and enabled', function () {
            expect(App.racePage.getPageNumber()
                    .should('be.visible')
                    .and('be.enabled'),
                'Navigation page trigger should be displayed and be enabled');
        })

        it('Previous link displayed', function () {
            expect(App.racePage.getPreviousLink()
                    .should('be.visible'),
                'Previous link should be displayed');
        })

        it('Next link displayed', function () {
            expect(App.racePage.getNextLink()
                    .should('be.visible'),
                'Next link should be displayed');
        })

        it('"Create race" button displayed and enabled', function () {
            expect(App.racePage.getCreateButton()
                    .should('be.visible')
                    .and('be.enabled'),
                'Create button should be displayed and be enabled');
        })
    })

    describe('Navigation works correctly', function () {
        afterEach(function () {
            App.racePage.openUrls();
        })

        it('"Go to" with empty page trigger navigates to name=&page=', function () {
            App.racePage.getGoButton().click();
            expect(cy.url().should('contain', `?name=&page=`), `url must contain' +
                                                                                               '"?name=&page="`);
        })

        const pages = [1, 2];
        pages.map(trigger => {
            it(`"Go to" with trigger ${trigger} navigates to name=&page=${trigger}`, function () {
                App.racePage.getPageNumber().type(trigger).trigger('change')
                App.racePage.getGoButton().click();
                expect(cy.url().should('contain', `?name=&page=${trigger}`), `url must contain ` +
                    `"?name=&page=${trigger}"`);
            })
        })

        it('Navigation to a previous page on the main page', async function () {

            App.racePage.getPreviousLink().should('have.class', 'disabled_link');

        })

        it('Navigation to a next page', async function () {

            if (await App.racePage.getCurrentPage() != await App.racePage.getAllPages()) {
                expect(App.racePage.getNextLink().should('not.be.disabled'),
                    'When there is more than 4 races next must be enabled');
            } else if ((await App.racePage.getTableRowText()).includes('There no races')) {
                expect(cy.get('tr>td')
                        .should('have.text', 'There no races'),
                    'When there is no races text must be "There no races');
            } else {
                expect(App.racePage.getNextLink().should('have.class', 'disabled_link'),
                    'When there is no races next must be disabled');
            }
        })

    })
})