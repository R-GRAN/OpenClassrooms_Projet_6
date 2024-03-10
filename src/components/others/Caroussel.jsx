import { useState } from "react";

function Caroussel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  function getClassnameByIndex(index) {
    if (currentPicture === index) {
      return "show";
    } else {
      return "";
    }
  }

  function nextImage() {
    if (currentPicture + 1 >= pictures.length) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  }

  function prevImage() {
    if (currentPicture - 1 >= 0) {
      setCurrentPicture(currentPicture - 1);
    } else {
      setCurrentPicture(pictures.length - 1);
    }
  }

  return (
    <div className="caroussel">
      <div className="picture_container">
        {pictures.map((picture, index) => (
          <img
            key={picture}
            src={picture}
            alt=""
            className={getClassnameByIndex(index)}
          />
        ))}
      </div>
      <button onClick={prevImage}>^</button>
      <span>
        {currentPicture + 1}/{pictures.length}
      </span>

      <button onClick={nextImage}>^</button>
    </div>
  );
}

export default Caroussel;
