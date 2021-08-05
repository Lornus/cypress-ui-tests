import {BaseMethods} from '../base.methods'

class UsersPages extends BaseMethods {

    userUrl = '/users'
    usersBtn = 'ul>li>a:nth-of-type(1)'
    userOnlineText = 'body > :nth-child(4)'
    mainTable = 'tbody'
    usersPlanetTextAboveTable = '.user_f'
    userFullNameWithUsersPlanetsTable = ':nth-child(6)'
    loginContainsText = ':nth-child(7)'
    allTableRows = 'tr'
    mainTable = 'table'

    openUrls() {
        super.openUrls(this.userUrl);
    }

    checkBtnClass() {
        return cy.get(this.usersBtn)
            .eq(1)
    }

    getUsersOnlineText() {
        return cy.get(this.userOnlineText)
    }

    checkMainTableDisplayed() {
        return cy.get(this.mainTable)

    }

    getAllRowsOfTable() {
        return  cy.get(this.mainTable).find(this.allTableRows)

    }
}

module.exports = new UsersPages()