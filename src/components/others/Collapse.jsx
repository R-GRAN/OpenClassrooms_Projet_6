import { useState } from "react";

function Collapse(props) {
  const [visible, setVisible] = useState(true);

  function handleCollapse() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <div className="collapse">
      <div className="title_collapse">
        <h2>{props.title}</h2>
        <button onClick={handleCollapse}>^</button>
      </div>
      {visible && <p>{props.text}</p>}
    </div>
  );
}
export default Collapse;
