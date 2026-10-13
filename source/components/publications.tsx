import data from '../content/publications.json';
export default function PublicationSections({ko=false,compact=false,includeCommunication=false}:{ko?:boolean;compact?:boolean;includeCommunication?:boolean}) {
  const Group=compact?'div':'section';
  return <>
    <Group className="paper-group"><h2>{ko?'출판된 학술논문':'Published articles'}</h2>
      {data.published.map(p=><article className="paper" key={p.title}>
        <p className="authors" lang="en">{p.authors} ({p.year})</p>
        <h3 lang="en">{p.title}</h3><p lang="en"><em>{p.venue}</em></p>
        <a href={p.doi}>{ko?'논문 보기':'Read article'} ↗</a>
      </article>)}
    </Group>
    <Group id="ongoing" className="paper-group"><h2>{ko?'진행 중인 연구':'Ongoing research'}</h2>
      {data.ongoing.map(p=><article className="paper" key={p.title}>
        <p className="authors" lang="en">{p.authors}</p><h3 lang="en">{p.title}</h3>
        <span className="status">{p.status==='under_review'?(ko?'심사 중':'Under review'):(ko?'수정 후 재제출':'Revised and resubmitted')}</span>
      </article>)}
    </Group>
    {(!compact||includeCommunication)&&<Group className="paper-group"><h2>{ko?'대중을 위한 연구 소통':'Public scholarship'}</h2>
      <article className="paper"><p className="authors" lang="en">Boseok Kim (2025)</p>
        <h3 lang="en">Gratitude Through the Lens of Neuroscience</h3>
        <p>{ko?'리서치 커뮤니케이션':'Research communication'}</p>
        <a href="https://doi.org/10.17863/CAM.118650">{ko?'케임브리지 리포지토리':'Cambridge Repository'} ↗</a>
      </article>
    </Group>}
  </>;
}
