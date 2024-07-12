import styles from "../style.js";
import { itemMark, ls_logo } from "../assets/index.js";
import GetStarted from "./GetStarted.jsx";

const Main = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <LeftSection />
      <RightSection />
      <BackgroundGradients />
      <MobileGetStarted />
    </section>
  );
};

const LeftSection = () => (
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <TopBanner />
    <MainHeading />
    <MainParagraph />
  </div>
);

const TopBanner = () => (
  <div className="flex flex-row items-center py-[6px] px-4 bg-heading-gradient rounded-[10px] mb-2">
    <img src={itemMark} alt="item" className="w-[32px] h-[32px]" />
    <p className={`${styles.paragraph} ml-2`}>
      <span className="text-white">Optimize your projects testing process</span>
    </p>
  </div>
);

const MainHeading = () => (
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
      Boost your tests,
      <br className="sm:block hidden" />{" "}
      <span className="text-gradient">Live your life.</span>
    </h1>
    <div className="ss:flex hidden md:mr-4 mr-0">
      <GetStarted />
    </div>
  </div>
);

const MainParagraph = () => (
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Ready to transform your software testing? Meet RA – the game-changing
    AI-powered platform built to simplify testing for everyone. Say goodbye
    to endless hours of manual testing and hello to efficiency like never
    before. Sign up now for an exclusive early access trial and be among the
    first to experience the future of testing firsthand. Don't miss out –
    join us today!
  </p>
);

const RightSection = () => (
  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img 
      src={ls_logo} 
      alt="Ra_logo_large"
      className="w-[100%] h-[100%] relative z-[5]"
    />
  </div>
);

const BackgroundGradients = () => (
  <>
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />
    <div className="absolute z-[1] w-[90%] h-[90%] rounded-full bottom-40 red__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 grey__gradient" />
  </>
);

const MobileGetStarted = () => (
  <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted />
  </div>
);

export default Main;