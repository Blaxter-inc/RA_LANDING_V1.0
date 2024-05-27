import { board1 } from "../assets";
import styles, { layout } from "../style";

const Mission = () => (
  <section id="testBoard" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={board1}
        alt="test_board"
        className="w-[80%]
      h-[80%] relative z-[5]"
      />

      <div
        className="absolute z-[3] -left-1/2 top-0 w-[50%] 
      h-[50%] rounded-full white__gradient"
      ></div>
      <div
        className="absolute z-[0] -left-1/2 bottom-0 w-[50%] 
      h-[50%] rounded-full red__gradient"
      ></div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gradient`}>
          Our Mission:
          <br className="sm-block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At RA, we're dedicated to revolutionizing software testing. Our
          mission is to become the industry's leading tool for efficient and
          automated testing, ensuring software quality across all types of web
          projects.
        </p>
      </div>
    </div>
  </section>
);

export default Mission;
