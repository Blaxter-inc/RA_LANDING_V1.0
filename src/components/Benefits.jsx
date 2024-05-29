import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-col md:flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
    style={{ backgroundColor: "bg-red-gradient" }}
  >
    <div className="flex-1">
      <h4 className="font-poppins font-semibold text-red-300 text-[18px] md:text-[20px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-300 text-[15px] md:text-[16px] leading-[22px]">
        {content}
      </p>
    </div>
  </div>
);

const Benefits = () => (
  <section
    id="benefits"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute -z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient" />

    <div
      className={`${layout.sectionInfo} relative z-[1] w-full md:w-[80%] mx-auto flex flex-col items-center justify-center`}
    >
      <h1 className={`${styles.heading2} text-center mb-6`}>
        Elevate Your Business with Our Features:
      </h1>

      <div
        className={`${layout.sectionImg} flex flex-col sm:flex-row justify-center items-start w-full md:w-[80%]`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>

    <Button styles="mt-10" />
  </section>
);

export default Benefits;
