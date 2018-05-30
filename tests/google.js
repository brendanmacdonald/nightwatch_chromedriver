describe('Google  search', function () {

    beforeEach(function (client, done) {
        console.log('beforeEach');
        done();
    });

    afterEach(function (client, done) {
        console.log('afterEach');
        done();
    });

    context('search for values', function () {

        it('a valid string value', function (browser) {
            var google = browser.page.googlePage();
            google
                .navigate()
                .expect.element('@body').to.be.present.before(1000)
            google
                .enterSearchValue('nightwatch')
                .sendKeys('@searchBox', browser.Keys.ENTER)
            google.expect.element('@main').to.be.present.before(2000)
            google.waitForElementPresent('@main')
            google.assert.containsText('@main', 'The Night Watch')
        });

    });
});