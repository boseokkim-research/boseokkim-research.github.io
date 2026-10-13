import {SITE_VERSION} from '../../content/site-version';
import {siteHref} from '../../components/site-links';
import type { Metadata } from 'next';
import '../globals.css';
import Navigation from '../../components/navigation';

const origin='https://boseokkim-research.github.io';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'김보석 | 교육심리학',template:'%s | 김보석'},description:'김보석은 문화, 관계, 교육적 맥락 속에서 아동과 청소년의 자율성과 웰빙을 연구합니다.',openGraph:{title:'김보석 — 교육심리학',description:'문화, 관계와 아동·청소년 발달.',type:'website'},robots:{index:true,follow:true},other:{'site-version':SITE_VERSION}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ko"><body><a className="skip" href="#main">본문으로 이동</a><header className="wrap header"><a href={siteHref("/ko/")} className="wordmark">Boseok Kim <span lang="ko">김보석</span></a><Navigation ko/></header><main id="main" className="wrap">{children}</main><footer className="wrap"><div><a className="wordmark" href={siteHref("/ko/")}>Boseok Kim <span lang="ko">김보석</span></a><p>교육심리학<br/>문화, 관계와 아동·청소년 발달</p></div><div className="profiles"><a href="https://orcid.org/0009-0001-1960-5494">ORCID ↗</a><a href="https://www.linkedin.com/in/bo-seok-kim">LinkedIn ↗</a><a href="https://www.researchgate.net/profile/Boseok-Kim-3">ResearchGate ↗</a></div><small>© 2026 Boseok Kim</small></footer><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Boseok Kim',alternateName:'김보석',url:origin,alumniOf:{'@type':'CollegeOrUniversity',name:'University of Cambridge'},sameAs:['https://orcid.org/0009-0001-1960-5494','https://www.linkedin.com/in/bo-seok-kim','https://www.researchgate.net/profile/Boseok-Kim-3']})}}/></body></html>}
