
import BasePage from "./basePage"
import landingPage from "./landingPage";

class SettingsPage extends BasePage {

    getLogoutButton() {return 'Or click here to logout.'}


    clickLogoutButton(){
        //cy.contains(this.getLogoutButton()).click()
        this.clickElement(this.getLogoutButton(), true);
        return landingPage;
    }
}
const settingsPage = new SettingsPage();
export default settingsPage