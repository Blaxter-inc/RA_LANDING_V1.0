import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <CTAContent />
    <CTAButton />
  </section>
);

const CTAContent = () => (
  <div className="flex-1 flex flex-col">
    <h2 className={styles.heading2}>
      Unlock the Power of AI for Your Quality Assurance Process!
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience the Difference Today! All you need is your OpenAI API key to
      revolutionize your QA process.
    </p>
  </div>
);

const CTAButton = () => (
  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <Button />
  </div>
);

export default CTA;
