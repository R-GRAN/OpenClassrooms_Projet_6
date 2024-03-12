import { useState } from "react";
import PropTypes, { oneOfType } from "prop-types";

function Collapse({ title, text }) {
  const [visible, setVisible] = useState(false);

  function handleCollapse() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

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

  const checked = checkIfEquipment();
  return (
    <div className="collapse">
      <div className="title_collapse">
        <h2>{title}</h2>
        <button onClick={handleCollapse}>^</button>
      </div>
      {visible && checked}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  text: oneOfType([PropTypes.string, PropTypes.array]),
};
export default Collapse;
