import { useParams } from "react-router-dom";
import accommodations from "@/assets/data/accommodations.json";
import Caroussel from "../../components/others/Caroussel";

function Logements() {
  const { accommodationNumber } = useParams();

  const accommodation = accommodations[accommodationNumber - 1];

  console.log(accommodationNumber);
  return (
    <div className="logements">
      <Caroussel />
      <div>
        <h2>{accommodation.title}</h2>
        <p>{accommodation.location}</p>
        <span>{accommodation.tags}</span>
      </div>
    </div>
  );
}

export default Logements;
