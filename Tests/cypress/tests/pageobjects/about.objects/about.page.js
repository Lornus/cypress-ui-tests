import {BaseMethods} from "../base.methods";
class AboutPage extends BaseMethods{
     mainTitle = 'hr +h1';

    openUrls() {
        super.openUrls('/about');
    }
}
module.exports = new AboutPage();