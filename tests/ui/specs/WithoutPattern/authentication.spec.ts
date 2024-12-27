import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://app.meloqa.com.br/auth');
})

test.describe('Authentication failed steps', () => {

    test('[CT001] - Deve validar se o email incorreto permite fazer login.', async ({ page }) => {
        await page.getByPlaceholder('nome@email.com').fill('random text')
        await page.getByPlaceholder('*****').fill('random password');
        await page.getByRole('button', { name: 'Entrar', exact: true }).click();

        await expect(page.getByText('E-mail inválido')).toBeVisible();
    })

})

