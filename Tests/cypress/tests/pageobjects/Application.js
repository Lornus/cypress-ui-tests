const UserPage = require('./users.objects/users.pages')
const HomePage = require('./home.objects/home.page')
const PlanetsPage = require('./planets.objects/planets.pages')
const RacePage = require('./races.objects/races.pages')
const RepeatableMethods = require('../../support/copypasted.commands');



class Application{
    homePage = HomePage
    userPage = UserPage
    planetsPage = PlanetsPage
    racePage = RacePage
    repeatableMethods = RepeatableMethods

}
export const App = new Application()