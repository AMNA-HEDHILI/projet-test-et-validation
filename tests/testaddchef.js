module.exports = {
    "validate add chef " :browser=> {
      
        browser.url("http://localhost:4200/addChef")
        browser.pause(10 * 1000)
        
        
        
        const urgentText= "body > app-root > app-add-chef > section > div > div:nth-child(1) > div > div > h2"
        browser.assert.containsText(urgentText,"Add Chef")
        browser.pause(10 * 1000)
    } 

}