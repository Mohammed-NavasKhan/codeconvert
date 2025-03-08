import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Ai from "../assets/agent.png";
const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-2 py-2">
    <CheckCircleIcon className="h-6 w-6 text-[#006a4d]" />
    <p>{text}</p>
  </div>
);

const MortgageMateCard = ({setIsOpen}) => {
  return (
    <div className="md:w-1/3 flex-2 h-full mt-5 mx-auto">
      <div className="bg-[#006a4d] rounded-lg shadow-lg max-w-md flex-2 h-full">
        <div className="flex items-center gap-6 p-6 pb-1">
          <div className="w-16 h-14 flex items-center justify-center">
            <img src={Ai} alt="AI Icon" />
          </div>
          <div>
            <h2 className="text-lg text-white font-semibold">Mortgage Mate</h2>
            <p className="text-sm text-white">Agentic AI Bot</p>
          </div>
        </div>

        <div className="space-y-3 bg-white py-6 rounded-lg p-6 pb-6 text-[#006a4d]">
          {["Personalised, Integrated experience", "Faster home buying process", "Easier, convenient, and automated"].map((text, index) => (
            <FeatureItem key={index} text={text} />
          ))}
          <button className="w-full p-2 border border-[#006a4d] rounded-lg hover:bg-gray-300 transition whitespace-nowrap text-[#006a4d] font-semibold" onClick={()=>setIsOpen(true)}>
            Start a conversation
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">Powered by AI</p>
      </div>
    </div>
  );
};

export default MortgageMateCard;
