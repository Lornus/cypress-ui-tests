/// <reference type ="cypress" />
const randomString = require("randomstring")

const tString = randomString.generate({length: 1, charset: 'ABCMEQKmercu'})


describe("All elements on the planets page displayed", function () {
    beforeEach(function () {
        cy.fixture('planets.page.fixture').as('data')
    })

    before(() => {
        App.planetsPage.openUrls()


    })

    it('All each page element are displayed || planets page', async function () {

        await App.repeatableMethods.DefoltElementsTested()

    })

    it('Second title "Planets" above search placeholder is displayed', async function () {

        expect(await App.planetsPage.getMainText()).to.equal('Planets', 'Second title above' +
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
            const planetsInTable = [this.data.planetsName]

            App.repeatableMethods.clearSearchInput()


            cy.get(App.planetsPage.searchPlaceHolder).type(tString)

            cy.get(App.planetsPage.findButton).click()

            planetsInTable.map(planet => {
                if (planet.includes(tString)) {
                    expect(cy.get(App.planetsPage.planetFromTable).should('have.text', planet),
                        'In table must be name of planet if even first letter is similar')
                } else {
                    expect(cy.get(App.planetsPage.noPlanets).should('have.text', 'There is no planet with such name'),
                        'Must be message if there is no such planet')
                }
            })
        })

        it('Searching planets with immediately clicks "Find" ', function () {
            App.repeatableMethods.clearSearchInput()

            expect(cy.get(App.planetsPage.planetFromTable).should('have.text', this.data.planetsName),
                'In table must be name of planet if even first letter is similar')

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

            it('Page number should have correct attributes "max"', function () {
                App.planetsPage.getPageNumber()
                    .invoke('attr', 'max')
                    .should('eq', '1')
            })

            it('Changing arrow value in page number || Positive', function () {
                const arrowLimit = '1'
                App.planetsPage.getPageNumber().type(arrowLimit).trigger('change')
                App.planetsPage.getGoButton().click()
                expect(cy.url().should('contain', `?name=&page=${arrowLimit}`), `url must contain is such case ' +
            '"?name=&page=${arrowLimit}"`)

            })

            it('Changing arrow value in page number || Negative', function () {
                const arrowLimit = '3'
                App.planetsPage.getPageNumber().type(arrowLimit).trigger('change')
                App.planetsPage.getGoButton().click()
                expect(cy.url().should('contain', `?name=&page=1`), `url must contain is such case ' +
            '"?name=&page="`)
            })
        })

        describe('Navigation links works correctly', function () {
            before(function (){
                App.planetsPage.getPageNumber().clear()
                App.planetsPage.getGoButton().click()
            })

            it('"Previous" link displayed',  function () {

                expect(App.planetsPage.getPreviousLink().should('be.visible'),'Whatever ' +
                    'link have class disable on enabled link must be visible')
            })

            it('"Next" link displayed',  function () {

                expect(App.planetsPage.getNextLink().should('be.visible'),'Whatever ' +
                    'link have class disable on enabled link must be visible')
            })


            it('"Previous" link disabled',  function () {

                expect(App.planetsPage.getPreviousLink().should('not.be.enabled'),
                    'As there is only 1 page link must be disabled :(')
            })

            it('"Next" link disabled',  function () {

                expect(App.planetsPage.getNextLink()
                            .should('not.be.enabled'),
                    'As there is only 1 page link must be disabled :(')
            })
        })

    })
    describe('Button "Create" on planet`s page works correctly', function (){
        it('Button "Create" displayed on /planets endpoint', function (){
            expect(App.planetsPage.getFirstCreateButton()
                    .should('be.enabled')
                    .and('be.visible'),
                'Button "Create" must be displayed and enabled ' +
                '|| first create')
        })

        it('Button "Create" displayed on /' +
            'planets/?name="someName"&page=', function (){
            App.repeatableMethods.typeSearchValue(tString)


            expect(App.planetsPage.getFirstCreateButton()
                    .should('be.enabled')
                    .and('be.visible'),
                'Button "Create" must be displayed and enabled ' +
                '|| first create')


        })

        it('Button "Create" displayed on /' +
            'planets/?name="someName"&page="somePage"', function (){
            App.repeatableMethods.clearSearchInput()

            const arrowLimit = '1'
            App.planetsPage.getPageNumber().type(arrowLimit).trigger('change')
            App.planetsPage.getGoButton().click()

            expect(App.planetsPage.getFirstCreateButton()
                    .should('be.enabled')
                    .and('be.visible'),
                'Button "Create" must be displayed and enabled ' +
                '|| first create')
        })

    })
    describe('On /new? endpoint planet creates',function (){
        it('', function (){

        })
    })
})