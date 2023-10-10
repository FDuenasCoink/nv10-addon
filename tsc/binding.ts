import { INV10, NV10Options } from "./nv10.interface";
import { join } from 'path';

/* eslint-disable @typescript-eslint/no-var-requires */
const addons = require('node-gyp-build')(join(__dirname, '..'));

export var NV10: {
  new (options: NV10Options): INV10
} = addons.NV10;