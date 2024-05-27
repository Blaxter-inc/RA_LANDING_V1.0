import { mentions } from "../constants";
import styles from "../style";
import DataMentionCard from "./DataMentionCard.jsx";

const DataMentions = () => (
  <section
    id="clients"
    className={`${styles.paddingY} 
    ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute -z-[0] w-[60%] h-[60%] 
    -right-[50%] rounded-full red__gradient">

    </div>
    <div />

    <div
      className="w-full flex justify-between items-center
      md.flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
    >
      <h1 className={styles.heading2}>
        Think for
        <br className="sm:block hidden" />a moment:
      </h1>
      <div className="w-full md:mt-0 mt-6"></div>
    </div>
    <div
      className="flex flex-wrap sm:justify-start justify-center
      w-full relative z-[1]"
    >
      {mentions.map((card) => (
        <DataMentionCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default DataMentions;
