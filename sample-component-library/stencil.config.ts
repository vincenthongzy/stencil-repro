import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'sample-component-library',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'sample-component-library',
      proxiesFile: '../sample-component-library-react/src/components.ts',
      includeImportCustomElements: true,
      customElementsDir: 'dist/components',
    }),
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
