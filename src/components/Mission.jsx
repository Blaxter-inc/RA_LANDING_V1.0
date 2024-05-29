import { board1Video } from "../assets"; 
import styles, { layout } from "../style";

const Mission = () => (
  <section id="testBoard" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} relative flex flex-col items-center`}>
      <div className="video-container relative">
        <video
          src={board1Video}
          type="video/mp4"
          alt="test_board_video"
          className="w-full h-auto border border-gray-300 rounded-lg"
          autoPlay
          loop
          muted
        />
      </div>
      <div className={`${layout.sectionInfo} text-center mt-6`}>
        <h2 className={`${styles.heading2} text-gradient mb-4`}>
          Our Mission:
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
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
