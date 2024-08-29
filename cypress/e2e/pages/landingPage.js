import BasePage from "./basePage"
import loginPage from "./loginPage";

class LandingPage extends BasePage {
    
    getSignin(){return 'Sign in'}

    clickSigninButton(){
        //cy.contains(this.getSignin()).click()
        this.clickElement(this.getSignin(), true);
        return loginPage;
}
}
const landingPage = new LandingPage();
export default landingPage