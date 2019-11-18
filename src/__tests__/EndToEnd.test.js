import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    jest.setTimeout(10000000);
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.Event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        jest.setTimeout(10000000);
        const extra = await page.$('.Event .extra');
        expect(extra).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        jest.setTimeout(10000000);
        await page.click('.Event .details-btn');

        const extra = await page.$('.Event .extra');
        expect(extra).toBeDefined();
    });
    test('User can collapse an event to hide its details', async () => {
        jest.setTimeout(10000000);
        await page.click('.Event .details-btn');

        const extra = await page.$('.Event .extra');
        expect(extra).toBeNull();
    });
});