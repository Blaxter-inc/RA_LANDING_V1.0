import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-heading-gradient`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex ml-3">
      <h4 className="font-poppins font-semibold text-red-600 text-[18px] leading-[23px] mb-1">
        {title}
      </h4>

      <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[22px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Unlock Faster Time to Market, <br className="responsive-br" />
          Effortlessly Manage Your Testing Needs, Revolutionize Your Quality
          Assurance.
        </h2>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
