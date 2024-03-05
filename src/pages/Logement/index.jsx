import { useParams } from "react-router-dom";
import accommodations from "@/assets/data/accommodations.json";
import Caroussel from "@/components/others/Caroussel";
import Rating from "@/components/others/Rating";

function Logement() {
  const { accommodationNumber } = useParams();

  const accommodation = accommodations[accommodationNumber - 1];

  return (
    <div>
      {" "}
      <Caroussel />
      <div className="logements">
        <div className="left">
          <h2>{accommodation.title}</h2>
          <p>{accommodation.location}</p>
          <span>{accommodation.tags}</span>
          <span>{accommodation.rating}</span>
        </div>
        <div className="right">
          <span>{accommodation.host.name}</span>
          <img src={accommodation.host.picture} alt="" />
          <Rating accommodation={accommodation} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
