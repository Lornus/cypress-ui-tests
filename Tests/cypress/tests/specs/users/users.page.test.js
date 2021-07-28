describe('Users page UI test', function () {
    describe("All elements on the users page displayed", function () {

        before(function () {
            App.userPage.openUrls()
        })

        beforeEach(function () {
            cy.fixture('users.fixtures/users.page.fixture').as('data')
        })

        it('"Users" button displayed correctly', function () {

            expect(App.userPage.checkBtnClass().should('have.class', 'disabled_link')
                    .and('not.be.enabled').and('be.visible'),
                'Button "Users" must be disabled and displayed')

        })
        it('"Users online" above users table is displayed', function () {

            expect(App.userPage.getUsersOnlineText().should('have.text', 'Users online'),
                'Users online must be seen above table')

        })


        it('Users table displays correctly', function () {

            expect(App.userPage.checkMainTableDisplayed().should('be.visible'),
                'Table with users online must be displayed')
        })


        it('Users info links work', function () {

            const userNamesInTable = [this.data.userName1, this.data.userName2]
            userNamesInTable.map(nameLink => {
                cy.contains(nameLink).click()
                cy.get(App.userPage.usersPlanetTextAboveTable).should('have.text', `All ${nameLink}\`s planet`)
                cy.go('back')
            })
        })


        it('User full name displays with users planets', function () {
            const userNames = [this.data.userName1, this.data.userName2]
            userNames.map(userName => {
                cy.contains(userName).click()
                cy.get(App.userPage.userFullNameWithUsersPlanetsTable).should('have.text', `${userName}`)
                cy.go('back')
            })
        })

        it('Login displays in the info when a user was created', function () {

            const userLogins = [this.data.userLogin1, this.data.userLogin2]
            userLogins.map(login => {
                cy.contains(login).click()
                cy.get(App.userPage.loginContainsText).should('contain', `${login}`)
                cy.go('back')
            })
        })

        it('Getting all header rows of table with ' +
            'users`s planets', async function () {

            const headerRows = [this.data.headerRow1, this.data.headerRow2, this.data.headerRow3]
            headerRows.map(rowText => {
                App.userPage.getAllRowsOfTable().should('contain', `${rowText}`)
            })

        })

        it('All each page element are displayed || users page', async function () {

            await App.repeatableMethods.DefaultElementsTested()


        })
    })
})
