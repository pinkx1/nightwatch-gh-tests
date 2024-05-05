require("dotenv").config({path:"nightwatch/.env"})

module.exports = {
  src_folders: ['nightwatch/test'],
  page_objects_path: ['nightwatch/pages'],
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://github.com',
      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },
    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      }
    }
  }
};
