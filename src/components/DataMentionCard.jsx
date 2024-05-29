import { check, sm_logo } from "../assets";

const DataMentionCard = ({ content, source }) => (
  <div className="bg-black-gradient rounded-lg shadow-md p-6 max-w-[320px] mx-auto my-4">
    <div className="flex items-center mb-4">
      <img src={sm_logo} alt="RA_logo" className="w-10 h-10 mr-4" />
      <h3 className="text-lg font-semibold text-gradient">{source}</h3>
    </div>
    <p className="text-sm text-white leading-6 mb-4">{content}</p>
    <div className="flex items-center">
      <img src={check} alt="check_icon" className="w-6 h-6 mr-2" />
      <span className="text-xs text-green-500 font-semibold">Verified</span>
    </div>
  </div>
);

export default DataMentionCard;
