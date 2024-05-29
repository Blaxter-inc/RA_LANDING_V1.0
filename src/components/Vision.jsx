import { board1Video } from "../assets"; 
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
    <video
        src={board1Video} // Set the source of the video
        type="video/mp4" // Specify the type of video
        alt="test_board_video" // Provide alternative text for accessibility
        className="w-[80%] h-[80%] relative z-[5]" // Apply the same styling classes
        autoPlay // Automatically start playing the video
        loop // Loop the video
        muted // Mute the video to prevent autoplay restrictions
      />
    </div>
  </section>
);

export default Vision;
