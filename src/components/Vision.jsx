import styles, { layout } from "../style";
import Button from "./Button";
import videoSource from "../assets/RA_V01.mp4";

const Vision = () => (
  <section className={layout.section}>
    <VisionContent />
    <VideoSection />
  </section>
);

const VisionContent = () => (
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} text-gradient`}>
      Our Vision:
      <br className="sm:block hidden" />
    </h2>
    <VisionParagraphs />
    <Button styles="mt-10" />
  </div>
);

const VisionParagraphs = () => (
  <>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At RA, our vision is to become the world's leading software testing
      platform, renowned for our unparalleled ability to simplify and automate
      the testing process for teams of all sizes and experience levels. We are
      dedicated to ensuring software quality through thorough testing,
      accelerating development timelines by reducing testing time and cost, and
      ultimately, improving customer satisfaction by delivering high-quality
      software that exceeds expectations.
    </p>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Join us as we pave the way for the future of software testing.
    </p>
  </>
);

const VideoSection = () => (
  <div className={layout.sectionImg}>
    <div className="relative w-full h-full">
      <Video />
      <GradientOverlays />
    </div>
  </div>
);

const Video = () => (
  <video
    src={videoSource}
    className="w-full h-full object-cover relative z-[5]"
    autoPlay
    loop
    muted
    playsInline
  >
    Your browser does not support the video tag.
  </video>
);

const GradientOverlays = () => (
  <>
    <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
  </>
);

export default Vision;
