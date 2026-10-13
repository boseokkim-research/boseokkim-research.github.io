import {teaching} from '../../../content/ko';
import Modules from '../../../components/modules';
export const metadata={title:'교육',alternates:{canonical:'/ko/teaching/',languages:{en:'/teaching/',ko:'/ko/teaching/','x-default':'/teaching/'}}};
export default function Teaching(){return <div className="bottom-space"><header className="page-top"><p className="eyebrow">강의와 수퍼비전</p><h1>대화를 통한 배움.</h1><p className="lead-small">개별 수퍼비전과 소그룹 수업, 대학 강의, 교육 프로그램 개발을 통해 다양한 배움의 과정에 참여해 왔습니다.</p><p>케임브리지대학교와 서울대학교에서 초등학생부터 대학원생까지 다양한 학습자와 함께했습니다.</p></header>{teaching.map((t,i)=><article className="record" key={t.title}><div className="date">{t.date}</div><div><h2>{t.title}</h2><p className="place">{t.place}</p><p>{t.body}</p>{i===0&&<Modules ko/>}</div></article>)}</div>}
