import {rm} from 'node:fs/promises';
await rm(new URL('../source/out/',import.meta.url),{recursive:true,force:true});
