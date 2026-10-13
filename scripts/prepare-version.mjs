import {readdir, readFile, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const excluded = new Set(['source/content/site-version.ts', 'source/public/version.json']);
async function files(directory) {
  const result = [];
  for (const item of await readdir(path.join(root, directory), {withFileTypes: true})) {
    const relative = directory + '/' + item.name;
    if (excluded.has(relative)) continue;
    if (item.isDirectory()) result.push(...await files(relative));
    else if (item.isFile()) result.push(relative);
  }
  return result;
}
const paths = ['source/package.json', 'source/package-lock.json', 'source/next.config.ts'];
for (const directory of ['source/app', 'source/components', 'source/content', 'source/public', 'scripts']) {
  paths.push(...await files(directory));
}
const hash = createHash('sha256');
for (const relative of paths.sort()) {
  hash.update(relative + '\0');
  hash.update(await readFile(path.join(root, relative)));
  hash.update('\0');
}
const version = hash.digest('hex').slice(0, 12);
await writeFile(path.join(root, 'source/content/site-version.ts'), `export const SITE_VERSION = '${version}';\n`);
await writeFile(path.join(root, 'source/public/version.json'), JSON.stringify({version}, null, 2) + '\n');
console.log(`Prepared site version ${version}.`);
