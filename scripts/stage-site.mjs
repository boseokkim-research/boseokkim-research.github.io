import {readFile,cp,mkdir,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const target=path.join(root,'_site');
await rm(target,{recursive:true,force:true});await mkdir(target);
for(const name of JSON.parse(await readFile(path.join(root,'site-files.json'),'utf8'))){if(name.includes('/')||name.includes('..'))throw new Error('Invalid asset path');await cp(path.join(root,name),path.join(target,name),{recursive:true});}
console.log('Deployable static files staged in _site.');
