import { useState } from "react";
import PropTypes from "prop-types";

function Slideshow({ pictures }) {
  /* gestion de l'etat de la photo actuellement affichée */
  const [currentPicture, setCurrentPicture] = useState(0);

  /* Fonction modifiant la classe de photo actuellement affichée */
  function putClassnameByIndex(index) {
    if (currentPicture === index) {
      return "show";
    } else {
      return "";
    }
  }

  /* Fonction affichant la photo suivante */
  function nextImage() {
    if (currentPicture + 1 >= pictures.length) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  }

  /* Fonction affichant la photo precedente */
  function prevImage() {
    if (currentPicture - 1 >= 0) {
      setCurrentPicture(currentPicture - 1);
    } else {
      setCurrentPicture(pictures.length - 1);
    }
  }

  return (
    <div className="slideshow">
      <div className="picture_container">
        {pictures.map((picture, index) => (
          <img
            key={picture}
            src={picture}
            alt=""
            className={putClassnameByIndex(index)}
          />
        ))}
      </div>
      {/* Condition : affiche uniquement s'il y a plus d'une photo */}
      {pictures.length > 1 && (
        <>
          <button onClick={prevImage}>^</button>
          <span>
            {currentPicture + 1}/{pictures.length}
          </span>
          <button onClick={nextImage}>^</button>
        </>
      )}
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
};

export default Slideshow;
