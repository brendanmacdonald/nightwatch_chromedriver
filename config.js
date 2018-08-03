module.exports = {
    src_folders: ["tests"],
    page_objects_path: 'pageObjects',
    globals_path: 'globals.js',
    selenium: {
        start_process: false,
    },
    test_settings: {
        default: {
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix: '',
            test_runner : {
                type : 'mocha',
                options : {
                  ui : "bdd",
                  reporter : 'mocha-junit-reporter',
                  reporterOptions: {
                    mochaFile: 'reports/results.xml'
                  }
                }
              },
            desiredCapabilities: {
                browserName: 'chrome',
                acceptSslCerts: true,
                chromeOptions: {
                    args: ["headless", "no-sandbox", "disable-gpu"]
                }
            },
        },
    },
};