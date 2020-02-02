import * as fs from 'fs';
import {promisify} from 'util';

(async () => {
  // Get .ts files from ./src except all.ts
  const fileNames = (await promisify(fs.readdir)('src'))
    .filter(name => name !== "all.ts")
    .sort();
  // Print `export * ...` statements
  for (const fileName of fileNames) {
    console.log(`export * from './${fileName.replace(/\.ts$/, '')}';`);
  }
})();
