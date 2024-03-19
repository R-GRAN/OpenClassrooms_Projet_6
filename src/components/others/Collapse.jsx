import { useState } from "react";

function Collapse({ title, text }) {
  const [visible, setVisible] = useState(false);
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
        <h3>{title}</h3>
        <button
          className={visible ? "button rotate" : "button "}
          onClick={handleCollapse}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {/* Condition : s'affiche uniquement si l'état de visible est true */}
      {visible && checked}
    </div>
  );
}

export default Collapse;