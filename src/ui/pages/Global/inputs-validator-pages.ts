import { type Page, type Locator } from '@playwright/test'

class InputGlobalMessagesValidator {
    readonly page: Page;
    readonly globalInputValidEmailValidation: Locator;
    readonly textInputPasswordOnClick: Locator;
    readonly globalInvalidEmailValidation: Locator;

    constructor(page: Page) {
        this.page = page;
      
        this.globalInputValidEmailValidation = page.getByText('Insira um e-mail para continuar.');
        this.textInputPasswordOnClick = page.getByText('Insira a senha da conta para continuar.');
        this.globalInvalidEmailValidation = page.getByText('E-mail inválido');
    }
}

export default InputGlobalMessagesValidator;