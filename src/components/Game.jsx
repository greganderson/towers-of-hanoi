import { useState } from "react";
import { discs } from "../assets/discs";
import Tower from "./Tower";

export default function Game() {
  const [t1, setT1] = useState(discs);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);

  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridColumnGap: "10px",
    justifyItems: "center",
    height: "200px",
    width: "800px",
  };

  return (
    <main style={styles}>
      <Tower discs={t1} />
      <Tower discs={t2} />
      <Tower discs={t3} />
    </main>
  );
}
