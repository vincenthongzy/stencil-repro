```
cd sample-component-library && npm i && npm run build && npm pack
cd ../sample-component-library-react && npm i && npm i ${WORKING_DIR}/sample-component-library/sample-component-library-0.0.1.tgz && npm run build && npm pack
cd ../sample-app && npm i && npm i ${WORKING_DIR}/sample-component-library-react/component-library-react-0.0.1.tgz && npm run test
```

Downgrading to @stencil/core@2.14.0 will prevent PrettyFormatPluginError: Invalid string length. To reproduce the happy path, manually modify the package.json in `sample-component-library` to `@stencil/core: "2.14.0`, delete the `dist` folders and rerun the above steps