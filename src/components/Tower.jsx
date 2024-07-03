import Disc from "./Disc";
import styles from "./Tower.module.css";

const baseColor = "blue";
const towerColor = "yellow";

const towerSVG = `
<svg width="90%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="10%" x="0%" y="90%" fill="${baseColor}" />
  <rect width="10%" height="90%" x="45%" y="0%" fill="${towerColor}" />
</svg>
`;

const towerImage = `data:image/svg+xml,${encodeURIComponent(towerSVG)}`;

export default function Tower({ discs }) {


  return (
    <section className={styles.tower}>
      {discs.map((discImage, i) => <Disc key={i} discImage={discImage} />)}
    </section>
  );
}
