import Banner from "@/components/others/Banner";
import Collapse from "@/components/others/Collapse";
import { aboutList } from "@/assets/data/aboutList.js";

console.log(aboutList);

function Propos() {
  return (
    <div>
      <Banner/>
      {aboutList.map((aboutListElem) => (
        <Collapse
          key={aboutListElem.title}
          title={aboutListElem.title}
          text={aboutListElem.content}
        />
      ))}
    </div>
  );
}

export default Propos;
