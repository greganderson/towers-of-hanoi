import Disc from "./Disc";
import styles from "./Tower.module.css";

export default function Tower({ discs }) {


  return (
    <section className={styles.tower}>
      {discs.map((discImage, i) => <Disc key={i} discImage={discImage} />)}
    </section>
  );
}
