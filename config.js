module.exports = {
    src_folders: ["tests"],
    output_folder: 'reports',
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
            "test_runner" : "mocha",
            desiredCapabilities: {
                browserName: 'chrome',
                acceptSslCerts: true,
                chromeOptions: {
                    //args: ["headless", "no-sandbox", "disable-gpu"]
                }
            },
        },
    },
    // Should permit parallel tests - github issue related to this not working.
    "test_workers": {
        "enabled": true,
        "workers": "auto"
    }
};