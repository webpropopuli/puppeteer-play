const puppeteer = require('puppeteer');

// Pick it up here: https://alligator.io/tooling/puppeteer/

//        SCREENSHOT
function PAPIgetScreenshot(page) {
  var extension = "jpg";
  const outFile = "PAPIout." + extension;

(async () => {
  console.log("-->saving image to disk");
  await page.setViewport({
      width: 1440,
      height: 900
    });
  await page.screenshot(
    { path: outFile,
        fullpage: true,
        type: 'jpeg',
        quality: 50,
        //  {clip: {x: 200, y: 800 }},
        omitBackground: true
    });
  console.log(`Img file saved to ${outFile}.`) ;
})(); // end async
}

//            PROGRAM START
(async () => {
  console.log("-->launching browser");
    const browser = await puppeteer.launch();

  console.log("-->waiting on new page")  ;
    const page = await browser.newPage();

  console.log("-->fetching page info");
    await page.goto('https://en.wikipedia.org/wiki/Naruto_Uzumaki');

// Grab first <p> to display
  const firstPar = await page.$eval('#mw-content-text p', el => el.innerText);
  console.log("********************************");
  console.log(firstPar);
  console.log("********************************");

  //PAPIgetScreenshot(page);

  console.log("-->Closing down");
    await browser.close();

  console.log(`...bye.`) ;
})();  // end async
