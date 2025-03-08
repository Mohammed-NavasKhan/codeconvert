import { useState } from "react";
import ChatbotPlugin from "../components/ChatbotPlugin";
import MortgageMateCard from "../components/MortgageMateCard";
import MortgageTools from "../components/MortgageTools";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Section */}
        <div className="relative w-full max-w-7xl mx-auto p-4">
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

        {/* Right Section */}
        <MortgageMateCard setIsOpen={setIsOpen} />
      </div>
      <MortgageTools  />
      <ChatbotPlugin {...{isOpen, setIsOpen}}/>
    </div>
  );
};

export default Home;
