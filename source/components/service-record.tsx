import {service} from '../content/service';
export default function ServiceRecord({ko=false}:{ko?:boolean}){
 const item=ko?service.ko:service.en;
 return <article className="record"><span className="date">{item.date}</span><div><h3>{item.title}</h3><p className="place">{item.place}</p></div></article>;
}
