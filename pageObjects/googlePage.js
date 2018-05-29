var googleCommands = {
    enterSearchValue: function (searchValue) {
        return this.setValue('@searchBox', searchValue);
    }
};

module.exports = {
    commands: [googleCommands],
    url: 'http://google.com',
    elements: {
        searchBox: {
            selector: 'input[type=text]'
        },
        body: {
            selector: 'body'
        },
        main: {
            selector: '#main'
        },
        settingsLink: {
            selector: 'a#abar_button_opt'
        }
    }
};