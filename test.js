import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';


export const options = {

  discardResponseBodies: true,

  scenarios: {
    ui: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
      options: {
        browser: {
          type: 'chromium',
        }
      }

    }

  }

};

export default async function () {
  const page = browser.newPage();

  

  // 01. Go to the homepage
  try {
    await page.goto('http://localhost:3001');

    //page.waitForSelector('p[class="woocommerce-result-count"]"]');
    //page.screenshot({ path: 'screenshots/01_homepage.png' });

    sleep(4);
    //01. Sign in, add to cart 
  const signIn=page.locator('#SignIn');
  const addToCart=page.locator('#AddCart');
   //await Promise.all([page.waitForNavigation(),signIn.click()]);
  
   signIn.click();
   sleep(1);
   addToCart.click();
   sleep(.5)
   addToCart.click();
   sleep(.5)
   addToCart.click();
    // 02. View products
    //const element = page.locator('a[href="product"]');
    //await element.click();
    //page.waitForSelector('button[name="add-to-cart"]');
  
  sleep(.5);
  
  } finally {
    page.close();
  }
}
