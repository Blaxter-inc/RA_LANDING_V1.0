import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <TopSection />
    <LinksSection />
    <BottomSection />
  </section>
);

const TopSection = () => (
  <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex-1 flex flex-col justify-start mr-10">
      <h3 className={`${styles.heading3} mb-4`}>Revolutionize Your Testing</h3>
      <p className={`${styles.paragraph} max-w-[420px]`}>
        Unlock the power of AI-driven test management. Boost efficiency, reduce
        costs, and deliver higher quality software faster than ever before.
      </p>
      <CallToAction />
    </div>
  </div>
);

const CallToAction = () => (
  <a
    href="#get-started"
    className={`${styles.paragraph} mt-6 text-secondary font-semibold hover:text-white transition-colors duration-300`}
  >
    Start Your Free Trial Today →
  </a>
);

const LinksSection = () => (
  <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
    {footerLinks.map((footerLink) => (
      <FooterLinkColumn key={footerLink.title} {...footerLink} />
    ))}
  </div>
);

const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
      {title}
    </h4>
    <ul className="list-none mt-4">
      {links.map((link, index) => (
        <FooterLink
          key={link.name}
          {...link}
          isLast={index === links.length - 1}
        />
      ))}
    </ul>
  </div>
);

const FooterLink = ({ name, link, isLast }) => (
  <li
    className={`font-poppins font-normal text-[16px] leading-[24px] 
    text-dimWhite hover:text-secondary cursor-pointer
    ${isLast ? "mb-0" : "mb-4"}`}
  >
    <a href={link}>{name}</a>
  </li>
);

const BottomSection = () => (
  <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    <Copyright />
    <SocialMediaIcons />
  </div>
);

const Copyright = () => (
  <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
    © 2024 RA: Testing Pyramid Insight. All rights reserved.
  </p>
);

const SocialMediaIcons = () => (
  <div className="flex flex-row md:mt-0 mt-6">
    {socialMedia.map((social, index) => (
      <SocialIcon
        key={social.id}
        {...social}
        isLast={index === socialMedia.length - 1}
      />
    ))}
  </div>
);

const SocialIcon = ({ icon, id, link, isLast }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center w-12 h-12 rounded-full bg-dimBlue hover:bg-secondary transition-colors duration-300 ${
      isLast ? "ml-4" : "mr-4"
    }`}
  >
    <img src={icon} alt={id} className="w-[24px] h-[24px] object-contain" />
  </a>
);

export default Footer;
