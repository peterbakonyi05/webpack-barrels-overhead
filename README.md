# Webpack bundle size comparison without and with barrel files

Every file is a module that has a small overhead in bundle size and in run-time as well.

With barrels: 5 modules, 4.5 kB
Without barrels: 3 modules, 3.65 kB

## Folder structure
* `webpack.config.js`: webpack config
* `src/with-barrels`: example using barrel files
* `src/without-barrels`: example without barrel files
* `output/with-barrels-bundle`: generated output by webpack
* `output/without-barrels-bundle`: generated output by webpack

## Generate bundles
* `npm i`
* `npm start`