import {siteHref} from '../../../components/site-links';
export const metadata={title:'소개',robots:{index:false,follow:true},alternates:{canonical:'/ko/cv/',languages:{en:'/cv/',ko:'/ko/cv/'}}};
export default function About(){return <><meta httpEquiv="refresh" content={'0;url='+siteHref('/ko/cv/')}/><p><a href={siteHref("/ko/cv/")}>소개 및 CV 보기 ↗</a></p></>;}
