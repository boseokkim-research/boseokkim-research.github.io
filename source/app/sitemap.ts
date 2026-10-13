export const dynamic='force-static';
import type {MetadataRoute} from 'next';
const origin='https://boseokkim-research.github.io';
export default function sitemap():MetadataRoute.Sitemap{return ['','research/','publications/','teaching/','cv/'].flatMap(p=>['','ko/'].map(lang=>({url:origin+'/'+lang+p,alternates:{languages:{en:origin+'/'+p,ko:origin+'/ko/'+p}}})));}
