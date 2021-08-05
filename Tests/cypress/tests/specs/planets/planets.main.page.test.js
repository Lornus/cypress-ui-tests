const randomString = require("randomstring")

const tString = randomString.generate({length: 1, charset: 'mw'})


async function writePlanetsToJsonArray(path) {
    //call it only if there is new planets or
    //each time make json file empty

    path = '../Tests/cypress/fixtures/planets.fixtures/all.planets.fixture.json'
    cy.writeFile(path, {"planets_on_page": await App.repeatableMethods.getTextFromLocator(App.planetsPage.planetFromTable)},
        {flag: 'a+'})
}

beforeEach(function () {
    cy.fixture('planets.fixtures/all.planets.fixture').as('planets')
})


describe('Of main planets page test || "/planets" endpoint', function () {
    describe("All elements on the planets page displayed", function () {
        before(() => {
            App.planetsPage.openUrls()

        })

        it('All each page element are displayed || planets page', async function () {

            await App.repeatableMethods.DefaultElementsTested()

        })

        it('Second title "Planets" above search placeholder is displayed', async function () {

            expect(await App.repeatableMethods.getTextFromLocator(App.planetsPage.mainText)).to.equal('Planets', 'Second title above' +
                ' search placeholder must be "Planets"')

        })

        it('Search placeholder displayed', function () {
            expect(App.planetsPage.getSearchPlaceHolder()
                .should('be.visible')
                .and('not.be.focused'), 'Search placeholder must be visible and non-active before click')

        })

        it('Clicked on search placeholder', function () {
            App.planetsPage.getSearchPlaceHolder().click()
            expect(App.planetsPage.getSearchPlaceHolder()
                .should('be.visible')
                .and('be.focused'), 'Search placeholder must be visible and focused after click')
        })

        it('"Find" button is displayed', function () {
            expect(App.planetsPage.getFindButton()
                    .should('be.visible')
                    .and('be.enabled')
                    .and('have.class', 'find')
                , '"Find" button must be visible and enabled')
        })

        describe('Searching planets by name works correctly', function () {

            it('Searching planets by random strings', function () {
                const listOfPlanets = this.planets.planets_on_page


                App.repeatableMethods.clearSearchInput()


                cy.get(App.planetsPage.searchPlaceHolder).type(tString)

                cy.get(App.planetsPage.findButton).click()


                if (listOfPlanets.includes(tString)) {
                    expect(cy.get(App.planetsPage.planetFromTable)
                        .then(($els) => {
                            const elementsArray = Cypress.$.makeArray($els).map((el) => el.innerText);
                            const stringElements = elementsArray.join('');

                            return (
                                listOfPlanets.includes(stringElements)
                            );
                        }).should('be.true'))

                } else {
                    expect(cy.get(App.planetsPage.noPlanets).should('have.text', 'There is no planet with such name'),
                        'Must be message if there is no such planet');
                }

            })

            it('Searching planets with immediately clicks "Find" ', async function () {
                App.repeatableMethods.clearSearchInput()

                cy.get(App.planetsPage.planetFromTable)
                    .then(($els) => {
                        const elementsArray = Cypress.$.makeArray($els).map((el) => el.innerText)
                        const stringElements = elementsArray.join('')


                        return (
                            stringElements
                        )
                    })
                    .should('contain', await App.repeatableMethods.getTextFromLocator(App.planetsPage.planetFromTable))
            })
        })

        it('Displaying searching string in "Search for"', function () {

            App.repeatableMethods.typeSearchValue(tString)

            expect(cy.get(App.planetsPage.searchFor).should('contain', tString),
                'Searching string must be displayed in "Search for:"')
        })
        describe('Pagination items works correctly', function () {

            describe('Pagination button works correctly', function () {

                it('Button "Go to" displayed', function () {
                    expect(App.planetsPage.getGoButton().should('be.enabled')
                            .and('be.visible'),
                        '"Go to" button must be clickable and visible')
                })


                it('On "Go to" clicked with empty page number values and empty search field', function () {
                    App.repeatableMethods.clearSearchInput()
                    App.planetsPage.getGoButton().click()
                    expect(cy.url().should('contain', `?name=&page=`), `url must contain is such case ' +
                                                                                               '"?name=&page="`)
                })

                it('On "Go to" clicked with empty page number values and non empty search field', function () {
                    App.repeatableMethods.typeSearchValue(tString)

                    expect(cy.url().should('contain', `?name=${tString}&page=`), `url must contain is such case ' +
                                                                                                        '"?name=${tString}&page="`)
                })

            })
            describe('Page number works correctly', function () {
                before(function () {
                    App.repeatableMethods.clearSearchInput()

                })

                it('Page number displayed', function () {
                    expect(App.planetsPage.getPageNumber().should('be.visible'),
                        'Page number should be visible')
                })

                it('Page number should have correct attributes "min"', function () {
                    App.planetsPage.getPageNumber()
                        .invoke('attr', 'min')
                        .should('eq', '1')
                })


                it('Changing arrow value in page number', function () {
                    App.repeatableMethods.planetPages.map(pagesArrow => {
                        App.planetsPage.getPageNumber().type(pagesArrow).trigger('change')
                        App.planetsPage.getGoButton().click()
                        expect(cy.url().should('contain', `?name=&page=${pagesArrow}`), `url must contain is such case ' +
                                                                                                                '"?name=&page=${pagesArrow}"`)
                    })
                })
            })

            describe('Navigation links works correctly', function () {
                before(function () {
                    App.planetsPage.getPageNumber().clear()
                    App.planetsPage.getGoButton().click()
                })

                it('"Previous" link displayed', function () {

                    expect(App.planetsPage.getPreviousLink().should('be.visible'), 'Whatever ' +
                        'link have class disable on enabled link must be visible')
                })

                it('"Next" link displayed', function () {

                    expect(App.planetsPage.getNextLink().should('be.visible'), 'Whatever ' +
                        'link have class disable on enabled link must be visible')
                })


                it('Go to next planetPages via "Next>>" if they are', function () {

                    if (!(Boolean(expect(cy.get(App.planetsPage.nextLinkPage)
                        .should('not.be.disabled'))))) {
                        expect(App.planetsPage.getNextLink()
                            .should('be.disabled'), 'If there is only one page ' +
                            'next link must be disabled')
                    }

                    for (let i = 0; i < App.repeatableMethods.planetPages.length - 1; i++) {
                        if (Boolean(expect(App.planetsPage.getNextLink()
                            .should('not.be.disabled')))) {
                            App.planetsPage.getNextLink().click()

                            expect(cy.get(App.planetsPage.table)
                                .should('be.visible'), 'On each page must be visible' +
                                '                                        table with created planets')

                            expect(App.planetsPage.getPreviousLink().should('not.be.disabled'),
                                "Previous link mustn't br disabled if we are on any next ")

                            expect(App.planetsPage.getCreateButton().should('be.enabled'),
                                'On each page create button must be enabled')
                        }
                    }
                    expect(App.planetsPage.getNextLink()
                        .should('not.be.enabled'), 'On the last page next ' +
                        'link must be disabled')

                    expect(cy.url().should('contain', `page=${App.repeatableMethods.planetPages[App.repeatableMethods.planetPages.length - 1]}`), 'in utl ' +
                        'must be number of last page')


                })

                it('Go to previous planetPages via "<<Previous" if they are', function () {

                    for (let i = 0; i < App.repeatableMethods.planetPages.length - 1; i++) {
                        if (Boolean(expect(App.planetsPage.getPreviousLink()
                            .should('not.be.disabled')))) {
                            App.planetsPage.getPreviousLink().click()
                        }
                    }
                    expect(App.planetsPage.getPreviousLink()
                        .should('not.be.enabled'), 'On the first page previous ' +
                        'link must be disabled')

                    expect(cy.url().should('contain', `page=${App.repeatableMethods.planetPages[App.repeatableMethods.planetPages.indexOf(1)]}`), 'in utl ' +
                        'must be number of last page')
                })
            })
        })
        describe('Button "Create" on planet`s page works correctly', function () {
            it('Button "Create" displayed on /planets endpoint', function () {
                expect(App.planetsPage.getCreateButton()
                        .should('be.enabled')
                        .and('be.visible'),
                    'Button "Create" must be displayed and enabled ' +
                    '|| first create')
            })

            it('Button "Create" displayed on /' +
                'planets/?name="someName"&page=', function () {
                App.repeatableMethods.typeSearchValue(tString)


                expect(App.planetsPage.getCreateButton()
                        .should('be.enabled')
                        .and('be.visible'),
                    'Button "Create" must be displayed and enabled ' +
                    '|| first create')


            })

            it('Button "Create" displayed on /' +
                'planets/?name="someName"&page="somePage"', function () {
                App.repeatableMethods.clearSearchInput()

                const arrowLimit = '1'
                App.planetsPage.getPageNumber().type(arrowLimit).trigger('change')
                App.planetsPage.getGoButton().click()

                expect(App.planetsPage.getCreateButton()
                        .should('be.enabled')
                        .and('be.visible'),
                    'Button "Create" must be displayed and enabled ' +
                    '|| first create')
            })

        })

    })
})
