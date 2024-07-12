import { layout } from "../style";
import styles from "../style";
import videoSource from "../assets/RA_video.mp4";

const Mission = () => (
  <section id="testBoard" className={layout.sectionReverse}>
    <VideoSection />
    <MissionStatement />
  </section>
);

const VideoSection = () => (
  <div className={layout.sectionImgReverse}>
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
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full red__gradient" />
  </>
);

const MissionStatement = () => (
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} text-gradient`}>
      Our Mission:
      <br className="sm:block hidden" />
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At RA, we're dedicated to revolutionizing software testing. Our mission is
      to become the industry's leading tool for efficient and automated testing,
      ensuring software quality across all types of web projects.
    </p>
  </div>
);

export default Mission;
