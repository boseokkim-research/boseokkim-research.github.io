import PublicationSections from './publications';
import ServiceRecord from './service-record';
import Modules from './modules';
import * as english from '../content/research';
import * as korean from '../content/ko';
import {talks, awards} from '../content/cv';

const awardsKo = [
  ['2023–2026', '연구 지원금', '호머턴 칼리지'],
  ['2025', '우수논문상', '한국청소년정책연구원'],
  ['2024–2025', '교육학부 현장연구 지원금', '케임브리지대학교'],
  ['2022–2023', '대학원 학업 장학금', '서울대학교'],
  ['2018–2021', '학업 우수 장학금', '애버리스트위스대학교'],
];

export default function AcademicProfile({ko = false}: {ko?: boolean}) {
  const data = ko ? korean : english;
  const research = [
    ...data.projects,
    ko
      ? {date: '2026', title: '박사과정 연구원 · THRiVE', place: '케임브리지대학교', body: '교육에서의 인간 성장과 번영을 주제로 교육학부 강연 시리즈에서 발표했습니다.'}
      : {date: '2026', title: 'Doctoral Researcher · THRiVE', place: 'University of Cambridge', body: 'Delivered a Faculty Talk Series session on human thriving in education.'},
    ko
      ? {date: '2025', title: '방문 박사과정 연구원', place: '서울대학교 · 사회학습·발달 연구실', body: '부모와 청소년의 상호작용에 관한 다방법·멀티모달 종단 연구 준비에 참여했습니다.'}
      : {date: '2025', title: 'Visiting PhD Researcher', place: 'Social Learning and Development Lab · Seoul National University', body: 'Participated in preparation for a multimethod and multimodal longitudinal study of parent–adolescent interactions.'},
  ].sort((a, b) => b.date.localeCompare(a.date));
  const sections = [
    ['education', ko ? '학력' : 'Education'],
    ['research', ko ? '연구·프로젝트' : 'Research & projects'],
    ['publications', ko ? '논문' : 'Publications'],
    ['teaching', ko ? '교육' : 'Teaching'],
    ['talks', ko ? '발표' : 'Talks'],
    ['awards', ko ? '수상·연구비' : 'Awards'],
  ];

  return <div className="bottom-space">
    <header className="page-top">
      <p className="eyebrow">{ko ? '김보석 / Boseok Kim' : 'Boseok Kim / 김보석'}</p>
      <h1>{ko ? <>다양한 맥락을 잇는<br/>연구의 여정.</> : <>A scholarly path<br/>across contexts.</>}</h1>
      <p className="lead-small">{ko
        ? '교육심리학 연구자로서 아동과 청소년이 문화와 관계 속에서 어떻게 성장하는지 탐구합니다.'
        : 'I am an educational psychology researcher exploring how children and adolescents develop within cultural and relational contexts.'}</p>
      <p>{ko
        ? '감사, 자율성, 웰빙에 관한 연구를 통해 학습자의 차이를 고려하는 교육적 활용을 모색합니다.'
        : 'My work on gratitude, autonomy and wellbeing informs educational practice that responds to differences between learners.'}</p>
    </header>
    <h2>CV</h2>
    <nav className="subnav" aria-label={ko ? '학술 이력 항목' : 'CV sections'}>
      {sections.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
    </nav>
    <section id="education" className="content-section">
      <h2>{ko ? '학력' : 'Education'}</h2>
      {data.education.map(([date, title, place, body, supervision]) => <article className="record" key={title}>
        <span className="date">{date}</span><div><h3>{title}</h3><p>{place}</p><p>{body}</p><p className="supervision" lang="en">{supervision}</p></div>
      </article>)}
    </section>
    <section id="research" className="content-section">
      <h2>{ko ? '연구 경험 및 프로젝트' : 'Research experience & projects'}</h2>
      {research.map(item => <article className="record" key={item.title}>
        <span className="date">{item.date}</span><div><h3>{item.title}</h3><p className="place">{item.place}</p><p>{item.body}</p></div>
      </article>)}
    </section>
    <section id="publications" className="content-section">
      <PublicationSections ko={ko} compact includeCommunication/>
    </section>
    <section id="teaching" className="content-section">
      <h2>{ko ? '교육 경험' : 'Teaching'}</h2>
      {data.teaching.map((item, index) => <article className="record" key={item.title}>
        <span className="date">{item.date}</span><div><h3>{item.title}</h3><p>{item.place}</p><p>{item.body}</p>{index === 0 && <Modules ko={ko}/>}</div>
      </article>)}
    </section>
    <section id="talks" className="content-section">
      <h2>{ko ? '주요 강연 및 학술 발표' : 'Selected talks & presentations'}</h2>
      {ko && <p>발표 제목과 행사명은 공식 영문 명칭으로 표기했습니다.</p>}
      {talks.map(([date, title, place]) => <article className="record" key={title}>
        <span className="date" lang="en">{date}</span><div lang="en"><h3>{title}</h3><p>{place}</p></div>
      </article>)}
    </section>
    <section id="awards" className="content-section">
      <h2>{ko ? '수상 및 연구 지원' : 'Awards & funding'}</h2>
      {(ko ? awardsKo : awards).map(([date, title, place]) => <article className="record" key={title}>
        <span className="date">{date}</span><div><h3>{title}</h3><p>{place}</p></div>
      </article>)}
    </section>
    <section className="content-section"><p className="eyebrow">{ko ? '복무' : 'Service'}</p><ServiceRecord ko={ko}/></section>
  </div>;
}
