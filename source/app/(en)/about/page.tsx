import {siteHref} from '../../../components/site-links';
export const metadata={title:'CV',robots:{index:false,follow:true},alternates:{canonical:'/cv/',languages:{en:'/cv/',ko:'/ko/cv/'}}};
export default function About(){return <><meta httpEquiv="refresh" content={'0;url='+siteHref('/cv/')}/><p><a href={siteHref("/cv/")}>View CV ↗</a></p></>;}
