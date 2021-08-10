const UserPage = require('./users.objects/users.pages');
const HomePage = require('./home.objects/home.page');
const PlanetsPage = require('./planets.objects/planets.pages');
const RacePage = require('./races.objects/races.pages');
const RepeatableMethods = require('../../support/copypasted.commands');
const AboutPage = require('../pageobjects/about.objects/about.page');



class Application{
    homePage = HomePage;
    userPage = UserPage;
    planetsPage = PlanetsPage;
    racePage = RacePage;
    aboutPage = AboutPage;
    repeatableMethods = RepeatableMethods;

}
export const App = new Application();