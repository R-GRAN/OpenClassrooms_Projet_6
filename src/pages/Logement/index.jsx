import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Slideshow from "@/components/others/Slideshow";
import Rating from "@/components/others/Rating";
import Error from "../Error";
import Collapse from "@/components/others/Collapse";
import Tags from "@/components/others/Tags";

function Logement({ accommodations }) {
  const { id } = useParams();
  const accommodation = getAccomodationByID(id);

  /* fonction recuperant l'appartement par son id */
  function getAccomodationByID(id) {
    for (let i = 0; i < accommodations.length; i++) {
      const accommodation = accommodations[i];

      if (id === accommodation.id) {
        return accommodation;
      }
    }
  }

  /* Si l'appartement est trouvé, retourne le jsx, sinon retourne le composant Error */
  if (accommodation !== undefined) {
    return (
      <div>
        <Slideshow pictures={accommodation.pictures} />
        <div className="logements">
          <div className="accomodation_details">
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>
            <Tags tags={accommodation.tags} />
          </div>
          <div className="host_details">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt="" />
            <Rating rating={accommodation.rating} />
          </div>
        </div>
        <div className="logements_collapse">
          <Collapse title="Description" text={accommodation.description} />
          <Collapse title="Equipement" text={accommodation.equipments} />
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
}

Logement.propTypes = {
  accommodations: PropTypes.array,
};

export default Logement;
