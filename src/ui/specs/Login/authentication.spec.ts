import { test } from '@playwright/test';
import LoginPage from '../../pages/Login/login-page';
import pages from '../../../utils/url-pages';
import userData from '../../../data/user-data';


const email = userData;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto(pages.loginPage);
    loginPage = new LoginPage(page);
})

test.describe('Authentication steps', () => {

    test('[CT001] -  Deve validar se o é possível efetuar o login.', async () => {
        await loginPage.doLogin(email.usuarios.email01, password);
    })

    test('[CT002] -  Deve validar se o email incorreto permite fazer login.', async () => {
        const invalidEmail = email.usuarios.email02
        await loginPage.checkInputTextWithIncorrectEmail(invalidEmail);
    })
})