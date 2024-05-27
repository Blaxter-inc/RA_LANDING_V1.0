import { board1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Vision = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Our Vision:
        <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] m-5`}>
        At RA, our vision is to become the world's leading software testing
        platform, renowned for our unparalleled ability to simplify and automate
        the testing process for teams of all sizes and experience levels. We are
        dedicated to ensuring software quality through thorough testing,
        accelerating development timelines by reducing testing time and cost,
        and ultimately, improving customer satisfaction by delivering
        high-quality software that exceeds expectations. Join us as we pave the
        way for the future of software testing.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={board1} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Vision;
