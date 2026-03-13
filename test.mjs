import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));

  console.log('Navigating to local server...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const html = await page.content();
  console.log('Page loaded. Body length:', html.length);
  const rootContent = await page.$eval('#root', el => el.innerHTML);
  console.log('Root content length:', rootContent.length);

  await browser.close();
})();
