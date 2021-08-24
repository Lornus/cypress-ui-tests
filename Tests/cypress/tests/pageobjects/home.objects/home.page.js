import {BaseMethods} from '../base.methods';

class HomePage extends BaseMethods {

    mainHomePageLink = '/';
    tableRows = 'ul>li';
    fromTableException = 'a>li';
    textAboveImages = '.home_text';
    homeImages = '.home_images>img';


    openUrls() {
        super.openUrls(this.mainHomePageLink);
    }

    getAboveImagesText() {
        return cy.get(this.textAboveImages);
    }

    getHomeImages() {
        return cy.get(this.homeImages);
    }
}


module.exports = new HomePage();