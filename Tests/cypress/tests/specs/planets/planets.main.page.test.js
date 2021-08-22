const randomString = require("randomstring")

const tString = randomString.generate({length: 1, charset: 'mw'})


beforeEach(function () {
    cy.fixture('planets.fixtures/all.planets.fixture').as('planets')

})


describe('Of main planets page test || "/planets" endpoint', function () {
    describe("All elements on the planets page displayed", function () {
        before(() => {
            App.planetsPage.openUrls()

        })

        it('All each page element are displayed || planets page', function () {

            App.universalMethods.DefaultElementsTested()

        })

        it('Second title "Planets" above search placeholder is displayed', function () {

            App.universalMethods.checkTextFromLocator(App.planetsPage.mainText, 'Planets')

        })

        it('Search placeholder displayed', function () {
            App.planetsPage.getSearchPlaceHolder()
                .should('be.visible')
                .and('not.be.focused')

        })

        it('Clicked on search placeholder', function () {
            App.planetsPage.getSearchPlaceHolder().click()
            App.planetsPage.getSearchPlaceHolder()
                .should('be.visible')
                .and('be.focused')
        })

        it('"Find" button is displayed', function () {
            App.planetsPage.getFindButton()
                .should('be.visible')
                .and('be.enabled')
                .and('have.class', 'find')
        })

        describe('Searching planets by name works correctly', function () {

            before(function () {
                App.planetsPage.getAliasesOfPlanetsLinks()

            })

            it('Searching planets by random strings', function () {
                const listOfPlanets = this.planets.planets_on_page


                App.universalMethods.clearSearchInput()


                cy.get(App.planetsPage.searchPlaceHolder).type(tString)

                cy.get(App.planetsPage.findButton).click()


                if (listOfPlanets.includes(tString)) {
                    cy.get(App.planetsPage.planetFromTable)
                        .then(($els) => {
                            const elementsArray = Cypress.$.makeArray($els).map((el) => el.innerText);
                            const stringElements = elementsArray.join('');

                            return (
                                listOfPlanets.includes(stringElements)
                            );
                        }).should('be.true')

                } else {
                    cy.get(App.planetsPage.noPlanets).should('have.text', 'There is no planet with such name')
                }
            })

            it.only('Searching planets with immediately clicks "Find" ', function () {
                App.planetsPage.getCurrentPage().then(txt => expect(txt).to.equal('1'))


            })
        })

        it('Displaying searching string in "Search for"', function () {

            App.universalMethods.typeSearchValue(tString);

            cy.get(App.planetsPage.searchFor).should('contain', tString)
        })

        describe('Pagination items works correctly', function () {

            describe('Pagination button works correctly', function () {

                it('Button "Go to" displayed', function () {
                    App.planetsPage.getGoButton().should('be.enabled')
                        .and('be.visible')
                })

                it('On "Go to" clicked with empty page number values and empty search field', function () {
                    App.universalMethods.clearSearchInput();
                    App.planetsPage.getGoButton().click();
                    cy.url().should('contain', `?name=&page=`)
                })

                it('On "Go to" clicked with empty page number values and non empty search field', function () {
                    App.universalMethods.typeSearchValue(tString);

                    cy.url().should('contain', `?name=${tString}&page=`)
                })
            })

            describe('Page number works correctly', function () {
                before(function () {
                    App.universalMethods.clearSearchInput();

                })

                it('Page number displayed', function () {
                    App.planetsPage.getPageNumber().should('be.visible')
                })

                it('Page number should have correct attributes "min"', function () {
                    App.planetsPage.getPageNumber()
                        .invoke('attr', 'min')
                        .should('eq', '1');
                })

                it('Changing arrow value in page number', function () {
                    App.planetsPage.planetPages.map(pagesArrow => {
                        App.planetsPage.getPageNumber().type(pagesArrow).trigger('change')
                        App.planetsPage.getGoButton().click();
                        cy.url().should('contain', `?name=&page=${pagesArrow}`)
                    })
                })
            })

            describe('Navigation links works correctly', function () {
                before(function () {
                    App.planetsPage.getPageNumber().clear();
                    App.planetsPage.getGoButton().click();
                })

                it('"Previous" link displayed', function () {

                    App.planetsPage.getPreviousLink().should('be.visible')
                })

                it('"Next" link displayed', function () {

                    App.planetsPage.getNextLink().should('be.visible')
                })


                it('Go to next planetPages via "Next>>" if they are', function () {

                    if (!(Boolean(cy.get(App.planetsPage.nextLinkPage)
                        .should('not.be.disabled')))) {
                        App.planetsPage.getNextLink()
                            .should('be.disabled')
                    }

                    for (let i = 0; i < App.planetsPage.planetPages.length - 1; i++) {
                        if (Boolean(App.planetsPage.getNextLink()
                            .should('not.be.disabled'))) {
                            App.planetsPage.getNextLink().click();

                            cy.get(App.planetsPage.table)
                                .should('be.visible')

                            App.planetsPage.getPreviousLink().should('not.be.disabled')

                            App.planetsPage.getCreateButton().should('be.enabled')
                        }
                    }

                    App.planetsPage.getNextLink()
                        .should('not.be.enabled')

                    cy.url().should('contain', `page=${App.planetsPage.planetPages[App.planetsPage.planetPages.length - 1]}`)
                })

                it('Go to previous planetPages via "<<Previous" if they are', function () {

                    for (let i = 0; i < App.planetsPage.planetPages.length - 1; i++) {
                        if (Boolean(App.planetsPage.getPreviousLink()
                            .should('not.be.disabled'))) {
                            App.planetsPage.getPreviousLink().click();
                        }
                    }

                    App.planetsPage.getPreviousLink()
                        .should('not.be.enabled')

                    cy.url().should('contain', `page=${App.planetsPage.planetPages[App.planetsPage.planetPages.indexOf(1)]}`)
                })
            })
        })

        describe('Button "Create" on planet`s page works correctly', function () {
            it('Button "Create" displayed on /planets endpoint', function () {
                App.planetsPage.getCreateButton()
                    .should('be.enabled')
                    .and('be.visible')
            })

            it('Button "Create" displayed on /' +
                'planets/?name="someName"&page=', function () {
                App.universalMethods.typeSearchValue(tString);


                App.planetsPage.getCreateButton()
                    .should('be.enabled')
                    .and('be.visible')
            })

            it('Button "Create" displayed on /' +
                'planets/?name="someName"&page="somePage"', function () {
                App.universalMethods.clearSearchInput();

                App.planetsPage.planetPages.then(arr => {
                    arr.map(trigger => {
                        App.planetsPage.getPageNumber().type(trigger).trigger('change');
                        App.planetsPage.getGoButton().click();

                        App.planetsPage.getCreateButton()
                            .should('be.enabled')
                            .and('be.visible')
                    })
                })
            })
        })

    })
})
