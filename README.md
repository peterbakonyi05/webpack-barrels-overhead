# Webpack and Rollup bundle size comparison without and with barrel files

## Webpack
With barrels: 5 modules, 4.39 kB
Without barrels: 3 modules, 3.56 kB

## Rollup
With barrels: 448 bytes
Without barrels: 334 bytes

Note on size:
* the generated output is smaller in both cases
* webpack has a small overhead independent of the size of the application.
* in general rollup generates a more compact output

## Folder structure
* `src/with-barrels`: example code using barrel files
* `src/without-barrels`: example code without barrel files
* `output`: generated bundles
* `rollup-with-barrels.config`: rollup config for barrels example
* `rollup-without-barrels.config`: rollup config for without barrels example
* `webpack.config.js`: webpack config for both examples

## Generate bundles
* `npm i`
* `npm run build`