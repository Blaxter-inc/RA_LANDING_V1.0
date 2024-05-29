import styles from "../style";
import { sm_logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`${styles.flexCenter} md:flex-row flex-col items-center justify-center mb-8 w-full`}
    >
      <div className="flex justify-center items-center md:justify-start md:items-start mb-4 md:mb-0 mr-0 md:mr-10">
        <img
          src={sm_logo}
          alt="Ra_logo"
          className="w-[266px] h-[72px] object-contain"
        />
      </div>
      <div className="text-center md:text-left">
        <p className={`${styles.paragraph} mt-4 max-w-[310px] text-gradient`}>
          Discover a Revolutionary Approach to Test Management!
        </p>
      </div>
    </div>

    <div className="w-full flex justify-center md:justify-between flex-wrap md:mt-0 mt-10 ">
      {footerLinks.map((footerLink) => (
        <div
          key={footerLink.key}
          className="flex flex-col ss:my-0 my-4 min-w-[150px] mx-6 "
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4 text-gradient">
            {footerLink.title}
          </h4>
          <ul className="list-none">
            {footerLink.links.map((link, index) => (
              <li
                key={link.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== footerLink.links.length - 1 ? "mb-2" : ""
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <br />
    <div className="w-full flex justify-center md:justify-between items-center md:pt-6 pt-10 border-t-[1px] border-t-[#3F3E45] text-gradient">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © 2024 RA: Testing Pyramid Insight. All rights reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : ""
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
