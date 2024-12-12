### Run npm install to install all dependencies

`npm install`

### Run the end-to-end tests.

`npx playwright test`

### Run the end-to-end tests with just one worker.

`npx playwright test --workers=1`

### Starts the interactive UI mode.

`npx playwright test --ui`

### Runs the tests only on Desktop Chrome.

`npx playwright test --project=chromium`

### Runs the tests in a specific file.

`npx playwright test example`

### Runs the tests in debug mode.

`npx playwright test --debug`

### Auto generate tests with Codegen.

`npx playwright codegen`

### To open last HTML report run:

`npx playwright show-report`