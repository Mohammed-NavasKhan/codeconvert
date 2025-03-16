import { useState } from "react";
import ChatbotPlugin from "../components/ChatbotPlugin";
import MortgageTools from "../components/MortgageTools";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import Ai from "../assets/agent.png";

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-2 py-1">
    <CheckCircleIcon className="h-6 w-6 text-[#006a4d]" />
    <p>{text}</p>
  </div>
);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row w-full h-full p-6 gap-4 items-center md:items-start">
        {/* Left Section start */}
        <div className="relative w-full md:w-[979px] h-[410px] rounded-xl p-2 mx-auto">
          {/* Background Image */}
          <div className="relative w-full h-[325px] md:h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://www.lloydsbank.com/assets/mortgages/hassle-free-landing-page/11239_lb_mortgage_hubpage_banner_2072x650_awk_d_1x.jpg"
              alt="Mortgage Banner"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content Box */}
          <div className="absolute top-1/2 left-10 md:left-16 transform -translate-y-1/2 bg-green-900 text-white p-6 rounded-lg max-w-md shadow-lg">
            <h1 className="text-3xl font-bold">Mortgages</h1>
            <p className="mt-2 text-base">
              Do you have a Club Lloyds current account? You could get an
              exclusive 0.20% discount on your initial rate when you complete on
              a qualifying mortgage with us.
            </p>
            <button className="mt-4 border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-green-900 transition">
              Our Club Lloyds offers
            </button>
          </div>
        </div>

        {/* Left Section end */}

        {/* Right Section start */}
        <div className="w-full md:w-[276px] h-[410px] rounded-xl bg-[#006a4d] shadow-lg pt-[13px] pb-[22px] flex flex-col justify-between">
          <div className="flex items-center gap-4 p-[12px] pb-0">
            <div className="overflow-hidden">
              <img
                src={Ai}
                alt="AI Icon"
                className="w-[80px] h-[63px] object-cover"

              />
            </div>
            <div style={{width:"-webkit-fill-available"}}>
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Mortgage Mate</span>
                <div className="w-[20px] h-[20px] flex items-center justify-center bg-white text-[#006A4D] font-bold text-sm rounded-tl-lg rounded-tr-lg rounded-br-lg">
                  AI
                </div>
              </div>
              <p className="text-sm text-white">Agentic AI Bot</p>
            </div>
          </div>

          <div className="space-y-3 bg-white py-6 rounded-lg p-6 pb-6 text-[#006a4d]">
            {[
              "Personalised, Integrated experience",
              "Faster home buying process",
              "Easier, convenient, and automated",
            ].map((text, index) => (
              <FeatureItem key={index} text={text} />
            ))}
            <button
              className="w-full p-2 border border-[#006a4d] rounded-lg hover:bg-gray-300 transition whitespace-nowrap text-[#006a4d] font-semibold"
              onClick={() => setIsOpen(true)}
            >
              Start a conversation
            </button>
          </div>

          <p className="text-xs text-white text-center mt-2">
            Powered by AI
          </p>
        </div>
        {/* Right Section end */}
      </div>

      <MortgageTools />
      <ChatbotPlugin {...{ isOpen, setIsOpen }} />
    </div>
  );
};

export default Home;
