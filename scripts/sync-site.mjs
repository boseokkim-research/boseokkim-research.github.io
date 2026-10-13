import { readdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
let previous=[];
try {previous=JSON.parse(await readFile(path.join(root,'site-files.json'),'utf8'));} catch(e) {if(e.code!=='ENOENT') throw e;}
const protectedNames=new Set(['source','scripts','.github','README.md','package.json','.gitignore','site-files.json','.git']);
for(const name of previous){if(name.includes('/')||name.includes('..')||protectedNames.has(name))throw new Error('Invalid managed path');await rm(path.join(root,name),{recursive:true,force:true});}
const names=await readdir(path.join(root,'source/out'));
for(const name of names){if(protectedNames.has(name))throw new Error('Output collides with source');await cp(path.join(root,'source/out',name),path.join(root,name),{recursive:true});}
await writeFile(path.join(root,'site-files.json'),JSON.stringify(names.sort(),null,2)+'\n');
console.log('Static files copied to repository root.');
