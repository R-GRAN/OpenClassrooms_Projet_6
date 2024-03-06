import Collapse from "@/components/others/Collapse";
import {aboutList} from "@/assets/data/aboutList.js";

console.log(aboutList);

function Propos() {
  return (aboutList.map((aboutListElem)=><Collapse key={aboutListElem.title} title={aboutListElem.title} text={aboutListElem.content}/>));
}

export default Propos;
