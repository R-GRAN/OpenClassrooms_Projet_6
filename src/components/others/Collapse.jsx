import { useState } from "react";
import PropTypes, { oneOfType } from "prop-types";

function Collapse({ title, text }) {
  const [visible, setVisible] = useState(true);
  const checked = checkIfEquipment();

  /* fonction gerant le changement d'état de visible lors du clic */
  function handleCollapse() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  /* fonction retournant une ul puis mappant text si props === equipement, sinon renvoie un p  */
  function checkIfEquipment() {
    if (title === "Equipement") {
      return (
        <ul>
          {text.map((equip) => (
            <li key={equip}>{equip}</li>
          ))}
        </ul>
      );
    } else return <p> {text}</p>;
  }

  return (
    <div className="collapse">
      <div className="title_collapse">
        <h2>{title}</h2>
        <button
          className={visible ? "button rotate" : "button"}
          onClick={handleCollapse}
        >
          ^
        </button>
      </div>
      {/* Condition : s'affiche uniquement si l'état de visible est true */}
      {visible && checked}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  text: oneOfType([PropTypes.string, PropTypes.array]),
};
export default Collapse;
