const UserPage = require('./users.objects/users.pages');
const HomePage = require('./home.objects/home.page');
const PlanetsPage = require('./planets.objects/planets.pages');
const RacePage = require('./races.objects/races.pages');
const UniversalMethods = require('../../support/universal.methods');
const AboutPage = require('../pageobjects/about.objects/about.page');
const RaceHelper = require('../../support/race.helper');
const PlanetHelper = require('../../support/planet.helper');


class Application {
    homePage = HomePage;
    userPage = UserPage;
    planetsPage = PlanetsPage;
    racePage = RacePage;
    aboutPage = AboutPage;
    universalMethods = UniversalMethods;
    raceHelper = RaceHelper;
    planetHelper = PlanetHelper

}

export const App = new Application();