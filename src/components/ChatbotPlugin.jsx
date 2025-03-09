import { useState } from "react";
import {XMarkIcon,PaperAirplaneIcon} from "@heroicons/react/20/solid";
import Ai from "../assets/agent.png";

export default function ChatbotPlugin({isOpen, setIsOpen}) {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", type: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbox UI */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-end z-40" onClick={() => setIsOpen(false)}>
          {/* Chatbox UI */}
          <div className="relative bottom-12 right-4 w-80 shadow-2xl rounded-xl bg-white border border-gray-300 z-50" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between bg-[#006a4d] text-white p-3 rounded-t-xl">
              <div className="flex items-center gap-2">
                <img src={Ai} alt="Bot Avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <h2 className="text-sm font-semibold">Mortgage Mate AI</h2>
                  <p className="text-xs opacity-80">Agentic AI Bot</p>
                </div>
              </div>
              <XMarkIcon className="cursor-pointer w-5 h-5" onClick={() => setIsOpen(false)} />
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-auto p-3 flex flex-col gap-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 text-sm rounded-lg ${msg.type === "bot" ? "bg-gray-100 self-start" : "bg-green-100 self-end"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Quick Reply Buttons */}
            <div className="p-2 flex gap-2">
              {["Houses", "Flats", "Bungalows"].map((option) => (
                <button
                  key={option}
                  className="border rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                  onClick={() => setMessages([...messages, { text: option, type: "user" }])}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-2 border-t flex items-center gap-2">
              <input
                type="text"
                className="flex-1 border p-2 text-sm rounded-lg focus:outline-none"
                placeholder="Type here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
               <PaperAirplaneIcon className="bg-[#006a4d] text-white p-2 rounded-lg w-8 h-8 cursor-pointer" size={16} onClick={handleSendMessage}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
