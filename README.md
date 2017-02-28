# Fork of Angular QuickStart Source with simple component and e2e test based on Webdriver.io

Install dependencies:

```shell
npm install -g --production windows-build-tools
```

```shell
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start
```

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

Here are the test related scripts:
* `npm run e2e` - run e2e tests, using Webdriver.io
