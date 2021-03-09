import configurePackage from './support/rollup/configure-package';

import util from './packages/util/package.json';

const configs = [
  ...configurePackage(util),
];

export default configs;
