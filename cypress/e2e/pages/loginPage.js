import BasePage from "./basePage"
import homePage from "./homePage"

class LoginPage extends BasePage {
getEmail(){return 'input[placeholder="Email"]'}
getPassword(){return 'input[placeholder="Password"]'}
getSigninButton(){return 'button[type="submit"]'}

enterEmail(emailValue){
    //cy.get(this.getEmail()).type(emailValue)
    this.fillText(this.getEmail(),emailValue);
    return this;

}
enterPassword(passwordValue){
    //cy.get(this.getPassword()).type(passwordValue)
    this.fillText(this.getPassword(),passwordValue);
    return this;
}
clickSigninButton(){
    //cy.get(this.getSigninButton()).click()
    this.clickElement(this.getSigninButton());
    return homePage;
}
}

const loginPage = new LoginPage();
export default loginPage