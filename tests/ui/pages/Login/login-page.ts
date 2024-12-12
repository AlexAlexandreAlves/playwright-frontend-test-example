import { Locator, Page } from "@playwright/test";


class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly enterButton: Locator;
    readonly emailValidationMessage: Locator;
    readonly passwordValidationMesssage: Locator;


    constructor (page: Page) {
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
}


export default LoginPage;