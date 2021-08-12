class PlanetHelper {
    checkMaxSatsProperty() {
        const checkMax = expect(App.planetsPage.getEnterSatsField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'max')
                .should('eq', '10000000000'),
            'Field to enter sats must be visible' +
            'enabled and have max attr 10000000000')
        if (!checkMax) cy.log("Sats field has wrong max attribute or isn't visible")
        return checkMax

    }

    checkMinSatsProperty() {
        const checkMin = expect(App.planetsPage.getEnterSatsField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'min')
                .should('eq', '0'),
            'Field to enter sats must be visible' +
            'enabled and have min attr 0')
        if (!checkMin) cy.log("Sats field has wrong min attribute or isn't visible")
        return checkMin

    }

    checkMaxMassProperty() {
        const checkMax = expect(App.planetsPage.getEnterMassField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'max')
                .should('eq', '100000000000'),
            'Field to enter sats must be visible' +
            'enabled and have max attr 10000000000')
        if (!checkMax) cy.log("Mass field has wrong max attribute or isn't visible")
        return checkMax

    }

    checkMinMassProperty() {
        const checkMin = expect(App.planetsPage.getEnterMassField().should('be.visible')
                .and('be.enabled')
                .invoke("attr", 'min')
                .should('eq', '1500000'),
            'Field to enter sats must be visible' +
            'enabled and have min attr 1500000')
        if (!checkMin) cy.log("Mass field has wrong min attribute or isn't visible")

        return checkMin
    }


}

module.exports = new PlanetHelper()