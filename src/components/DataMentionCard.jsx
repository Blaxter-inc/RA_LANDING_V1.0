import { check, sm_logo } from "../assets";

const DataMentionCard = ({ content, source }) => (
  <div
    className="flex justify-between flex-col px-10 py-12
    rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 
    data-mention-card"
  >
    <img
      src={sm_logo}
      alt="Ra_logo"
      className="w-[48px] 
        h-[48px] "
    />
    <p
      className="font-poppins font-normal text-[18px]
    leading-{32px] text-white my-10"
    >
      {content}
    </p>
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4
          className="font-poppins font-semibold text-[20px]
    leading-{32px] text-gradient"
        >
          {source}
        </h4>
      </div>
      <div>
        
      </div>
    </div>
  </div>
);

export default DataMentionCard;
