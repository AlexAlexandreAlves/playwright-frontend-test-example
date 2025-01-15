import { expect, Locator, Page } from "@playwright/test";
import snackbarMessages from "../../../utils/snackbar-messages";
import InputGlobalMessagesValidator from '../Global/inputs-validator-pages';

class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly enterButton: Locator;
    readonly emailValidationMessage: Locator;
    readonly passwordValidationMesssage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.getByPlaceholder('nome@email.com');
        this.passwordField = page.getByPlaceholder('*****');
        this.enterButton = page.getByRole('button', { name: 'Entrar', exact: true });
        this.emailValidationMessage = page.getByText('Insira um e-mail válido para continuar.');
        this.passwordValidationMesssage = page.getByText('Insira a senha da conta para continuar.');
    }

    async fillEmailField(email: string) {
        await this.emailField.fill(email);
    }

    async fillPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    async doLogin(email: string, password: string) {
        await this.fillEmailField(email);
        await this.fillPasswordField(password);
        await this.enterButton.click();
    }

    async checkInvalidCredentials() {
        await this.emailValidationMessage.waitFor()
        await this.passwordValidationMesssage.waitFor()
        await expect(this.emailValidationMessage).toHaveText(snackbarMessages.emailField)
        await expect(this.passwordValidationMesssage).toHaveText(snackbarMessages.passwordField)
    }

    async checkInputTextWithIncorrectEmail(invalidEmail: string) {
        const globalInputValidation = new InputGlobalMessagesValidator(this.page)
        await this.emailField.fill(invalidEmail);
        await this.enterButton.click();
        await expect(globalInputValidation.globalInvalidEmailValidation).toBeVisible();
    }

}


export default LoginPage;