const websiteImagers = require('puppeteer');

function Get(url) {
   const getImages = async () => {
       const browser = await  websiteImagers.launch();
       const page = await browser.newPage();
     
         /*輸出的解析度*/
       await page.setViewport({
          width: 800, 
          height: 1280
         });
      
         /*輸出的網址*/
       await page.goto(url);
     
        /*要輸出的檔名*/
       await page.screenshot({
          path: 'output_website.png',
          fullPage: true
         });      
       await browser.close();   
 };
 getImages();
 syncDelay(10000);
}

function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}

module.exports = {
   Get: Get
};

