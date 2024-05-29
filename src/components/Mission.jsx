import { board1Video } from "../assets"; 
import styles, { layout } from "../style";

const Mission = () => (
  <section id="testBoard" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <video
        src={board1Video} // Set the source of the video
        type="video/mp4" // Specify the type of video
        alt="test_board_video" // Provide alternative text for accessibility
        className="w-[80%] h-[80%] relative z-[5]" // Apply the same styling classes
        autoPlay // Automatically start playing the video
        loop // Loop the video
        muted // Mute the video to prevent autoplay restrictions
      />

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
