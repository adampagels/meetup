import puppeteer from 'puppeteer';

describe('puppeteer tests', () => {
    beforeEach(() => {
        jest.setTimeout(10000000);
    });
    describe('show/hide an event details', () => {
        test('An event element is collapsed by default', async () => {
            const browser = await puppeteer.launch({
                headless: false,
                slowMo: 500 // slow down by 250ms
            });
            const page = await browser.newPage();
            await page.goto('http://localhost:3000/');

            await page.waitForSelector('.Event');

            const extra = await page.$('.Event .extra');
            expect(extra).toBeNull();
            browser.close();
        });
        test('User can expand an event to see its details', async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('http://localhost:3000/');

            await page.waitForSelector('.Event');
            await page.click('.Event .details-btn');

            const extra = await page.$('.Event .extra');
            expect(extra).toBeDefined();
            browser.close();
        });
    });
});