const {By, Key, Builder} = require('selenium-webdriver');
var should = require("chai").should();
let chrome = require('selenium-webdriver/chrome');
const path = require('path');

// describe block
describe("Enter to write seccion", function(){

    //it block
    it("successfully", async function(){

        //launch the browser
        
        const service = new chrome.ServiceBuilder(path.resolve(__dirname, './chromedriver'));
        const options = new chrome.Options();
        const driver = new Builder().forBrowser('chrome').setChromeService(service).setChromeOptions(options).build();

        //navigate to our application
        await driver.get("http://localhost:3000/write")

        //assert
        let todoText = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/span')).getText().then(function(value){
            return value
        });


        //assert using chai should
        todoText.should.equal("Login")

        //close the browser
        await driver.quit();

    });

});


