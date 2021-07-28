const randomString = require("randomstring");

const planetName = randomString.generate({length: 6, charset: 'ABCdefgjklmnte'});
const planetDiscoverer = randomString.generate({length: 6, charset: 'ABCdefgjklmnte'});
const planetSats = parseInt(Math.random() * 10000000000 + 0);
const planetMass = parseInt(Math.random() * (100000000000 - 1500000) + 1500000);
const filePath = 'planets.fixtures/media/test.page.png';


describe('Create planet positive test || png file uploaded', function () {
    before('Go to the creation page',function () {
        App.planetsPage.openUrls();
        App.planetsPage.getCreateButton().click();

    })
    after('Deleting new planet',function () {
        cy.get(App.planetsPage.planetFromTable).click()
        cy.get('[value="Delete planet"]').click()
    })

    describe('Create planet with all data correctly entered || uploading file - png picture', function () {

        it('Creation planet with all correct inputs and any file added', function () {

            App.planetsPage.getEnterNameField().type(planetName);
            App.planetsPage.getEnterDiscovererField().type(planetDiscoverer);

            App.planetsPage.getEnterSatsField().type(planetSats).trigger('change');
            App.planetsPage.getEnterMassField().type(planetMass).trigger('change');

            App.planetsPage.getFileUploader().attachFile(filePath);
            App.planetsPage.getFileUploader().click();

            App.planetsPage.getCreateButton().click();
        })
        describe('After adding planet expected result', function () {

            describe('On planet page must be required elements', function () {

                it('All each page element are displayed || on new planet page', async function () {

                    await App.repeatableMethods.DefaultElementsTested();

                })

                it('On page of created planet must be planet information', function () {

                    expect(cy.get('.planet_ > h1').should('have.text', 'Planet'),
                        'Above planet name must be h1 "Planet"');

                    expect(cy.get('.planet_images').invoke('attr', 'alt').should('eq',
                        '*Planet picture',
                        'Alt of picture must be "*Planet picture"')
                    );

                    expect(cy.get('.planet_images').and('be.visible'),
                        'Image of planet must be visible');

                    expect(cy.get('.add>p:nth-child(1)').should('contain', `Planet: ${planetName}`),
                        `On new page must be field: Planet: ${planetName}`);

                    expect(cy.get('.add>p:nth-child(2)').should('contain', `Discoverer: ${planetDiscoverer}`),
                        `On new page must be field: Discoverer: ${planetDiscoverer}`);

                    expect(cy.get('.add>p:nth-child(3)').should('contain', `Sat's: ${planetSats}`),
                        `On new page must be field: Sat's: : ${planetSats}`);

                    expect(cy.get('.add>p:nth-child(4)').should('contain', `Mass: ${planetMass}`),
                        `On new page must be field: Mass: : ${planetMass}`);

                    expect(cy.get('tbody>tr:nth-child(2)').should('have.text', 'There no races'));
                })

                it("Buttons on created planet's page are displayed", function () {

                    expect(cy.get('[value="Add race"]').should('be.visible')
                        .and('be.enabled'))

                    expect(cy.get('[value="Delete race"]').should('be.visible')
                        .and('be.enabled'))

                    expect(cy.get('[value="Update planet"]').should('be.visible')
                        .and('be.enabled'))

                    expect(cy.get('[value="Delete planet"]').should('be.visible')
                        .and('be.enabled'))

                    expect(cy.get('[value="Update planet photo"]').should('be.visible')
                        .and('be.enabled'))

                })
                describe('New planet added to BD', function () {
                    it("New planet is existing in table", function () {

                        App.planetsPage.openUrls();
                        App.planetsPage.getSearchPlaceHolder().type(planetName);
                        App.planetsPage.getFindButton().click();
                        expect(cy.get(App.planetsPage.planetFromTable).should('contain', planetName));
                    })
                })
            })
        })
    })
})