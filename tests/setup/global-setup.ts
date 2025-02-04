import { chromium, FullConfig } from "@playwright/test";


async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use;
    const browser = await chromium.launch({ headless: true, timeout: 20000 });
    const context = await browser.newContext();
    const page = await browser.newPage();

    try {
        await context.tracing.start({ screenshots: true });
        await page.goto(baseURL!);
        await page.context().storageState({ path: storageState as string });
        await context.tracing.stop({ path: './test-results/setup-trace.zip' });
        await browser.close();

    } catch (error) {
        await context.tracing.stop({ path: './test-results/setup-trace.zip' });
        await browser.close();
        throw error;
    }
}

export default globalSetup;