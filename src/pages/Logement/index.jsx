import { useParams } from "react-router-dom";
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
    const [firstName, lastName] = accommodation.host.name.split(" ");
    
    return (
      <>
        <Slideshow pictures={accommodation.pictures} />
        <div className="logements">
          <div className="accomodation_details">
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>
            <Tags tags={accommodation.tags} />
          </div>
          <div className="host_details">
            <div className="host_presentation">
              <div className="host_name">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>

              <img
                src={accommodation.host.picture}
                alt={"photo de " + accommodation.host.name}
              />
            </div>
            <Rating rating={accommodation.rating} />
          </div>
        </div>
        <div className="logements_collapse">
          <Collapse title="Description" text={accommodation.description} />
          <Collapse title="Equipement" text={accommodation.equipments} />
        </div>
      </>
    );
  } else {
    return <Error />;
  }
}

export default Logement;
