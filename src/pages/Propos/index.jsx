import Banner from "@/components/others/Banner";
import Collapse from "@/components/others/Collapse";
import { aboutList } from "@/assets/data/aboutList.js";

function Propos() {
  return (
    <>
      <Banner picture={"src/assets/images/montagne.png"} />
      <div className="aboutList_container">
        {aboutList.map((aboutListElem) => (
          <Collapse
            key={aboutListElem.title}
            title={aboutListElem.title}
            text={aboutListElem.content}
          />
        ))}
      </div>
    </>
  );
}

export default Propos;
