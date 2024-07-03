import { useState } from "react";
import { discs } from "../assets/discs";
import Tower from "./Tower";
import styles from "./Game.module.css";

export default function Game() {
  const [t1, setT1] = useState(discs);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);

  return (
    <main className={styles.game}>
      <Tower discs={t1} />
      <Tower discs={t2} />
      <Tower discs={t3} />
    </main>
  );
}
