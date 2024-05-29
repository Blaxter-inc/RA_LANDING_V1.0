import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-md`}
  >
    <div className="flex-1 flex flex-col md:mr-8">
      <h2 className={`${styles.heading2} text-white`}>
        Unlock the Power of AI for Your Quality Assurance Process!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] text-white mt-5`}>
        Experience the Difference Today! All you need is your OpenAI API key to
        revolutionize your QA process.
      </p>
    </div>
    <div className={`${styles.flexCenter} mt-6 md:mt-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;
