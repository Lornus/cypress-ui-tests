const UserPage = require('./users.page')
const HomePage = require('./home.page')
const PlanetsPage = require('./planets')
const RepeatableMethods = require('../../support/copypasted.commands');



class Application{
    homePage = HomePage
    userPage = UserPage
    planetsPage = PlanetsPage
    repeatableMethods = RepeatableMethods

}
export const App = new Application()