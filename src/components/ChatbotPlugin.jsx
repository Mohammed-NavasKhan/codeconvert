import { useEffect, useRef } from "react";
import { XMarkIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import Ai from "../assets/agent.png";
import MaximizeIcon from "../assets/maximize-svgrepo-com.svg";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { useChat } from "../ChatContext/ChatContext";


export default function ChatbotPlugin({ isOpen, setIsOpen }) {
 

  const navigate = useNavigate(); 
  const { messages,isTyping ,handleSendMessage,input, setInput } = useChat(); 

  const chatRef = useRef(null);


  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

 

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbox UI */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-end z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Chatbox UI */}
          <div
            className="relative bottom-12 right-4 w-80 shadow-2xl rounded-xl bg-white border border-gray-300 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#006a4d] text-white p-3 pb-0 rounded-t-xl">
              <div className="flex items-center gap-2">
                <img src={Ai} alt="Bot Avatar" className="w-[80px] h-[63px]" />

                <div style={{ width: "-webkit-fill-available" }}>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">
                      Mortgage Mate
                    </span>
                    <div className="w-[20px] h-[20px] flex items-center justify-center bg-white text-[#006A4D] font-bold text-sm rounded-tl-lg rounded-tr-lg rounded-br-lg">
                      AI
                    </div>
                  </div>
                  <p className="text-sm text-white">Agentic AI Bot</p>
                </div>
              </div>

              <div className="flex gap-2">
                {/* Maximize Icon */}
                <img
                  src={MaximizeIcon}
                  alt="Maximize chat"
                  className="cursor-pointer w-5 h-5 p-1 bg-white text-black rounded-lg"
                  onClick={() => navigate("/mortgages")}
                  aria-label="Maximize chat"
                />

                {/* Close Icon */}
                <XMarkIcon
                  className="cursor-pointer w-5 h-5 p-1 bg-white text-black rounded-lg"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-auto p-3 flex flex-col gap-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end ${
                    msg.type === "bot"
                      ? "self-start"
                      : "self-end flex-row-reverse"
                  }`}
                >
                  {/* User Avatar (Only for User Messages) */}
                  {msg.type !== "bot" && (
                    <div className="w-8 h-8 flex items-center justify-center bg-green-800 text-white text-sm font-semibold rounded-full ml-2">
                      J
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`p-2 text-sm rounded-lg max-w-xs ${
                      msg.type === "bot"
                        ? "bg-gray-100 text-gray-900"
                        : "bg-green-100 text-gray-900"
                    }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="self-start bg-gray-100 p-2 text-sm rounded-lg italic">
                  Typing...
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-2 border-t flex items-center gap-2 bg-gray-100 rounded-xl">
              {/* Input Field Container */}
              <div className="flex flex-1 items-center bg-gray-200 p-2 rounded-lg">
                <input
                  type="text"
                  className="w-full bg-transparent text-gray-700 text-sm p-2 outline-none"
                  placeholder="Type here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  aria-label="Type a message"
                />
              </div>

              {/* Send Button */}
              <div
                className="w-10 h-10 flex items-center justify-center bg-green-800 rounded-full cursor-pointer shadow-md hover:bg-green-700 transition"
                onClick={handleSendMessage}
                aria-label="Send message"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4414 20.0141L20.8888 3.36723C21.0097 2.9914 21.0245 2.58953 20.9318 2.20581C20.839 1.82209 20.6423 1.47137 20.3631 1.19222C20.084 0.913074 19.7332 0.716309 19.3495 0.623561C18.9658 0.530814 18.5639 0.545676 18.1881 0.666514L1.54635 6.12007C1.14459 6.25171 0.790805 6.49937 0.52962 6.83183C0.268436 7.16428 0.111519 7.56662 0.0787173 7.98813C0.0459155 8.40963 0.138708 8.83141 0.345316 9.20027C0.551924 9.56913 0.863075 9.86854 1.23964 10.0607L5.9807 12.4773C6.21419 12.5964 6.47689 12.6464 6.73782 12.6214C6.99876 12.5964 7.24713 12.4975 7.45376 12.3362L13.2406 7.8139C13.3089 7.75948 13.395 7.73212 13.4822 7.73706C13.5695 7.74201 13.6518 7.77889 13.7136 7.84069C13.7754 7.90248 13.8123 7.98486 13.8173 8.07211C13.8222 8.15937 13.7948 8.24539 13.7404 8.31376L9.22013 14.1047C9.05901 14.3114 8.96024 14.5598 8.93544 14.8208C8.91063 15.0817 8.96084 15.3443 9.08012 15.5777L11.4997 20.3218C11.6919 20.6987 11.9914 21.0102 12.3604 21.2169C12.7295 21.4237 13.1515 21.5165 13.5732 21.4835C13.995 21.4506 14.3975 21.2935 14.73 21.0319C15.0625 20.7704 15.31 20.4162 15.4414 20.0141Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full border-t bg-white rounded-b-xl">
              {/* Tabs Section */}
              <div className="flex justify-around items-center p-1 border-b">
                {/* Chat Tab */}
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="border-b-2 border-blue-900 w-6"></div>
                  <ChatBubbleLeftRightIcon className="w-4 h-4 stroke-2 text-[#006a4d]" />
                  <span className="text-sm font-semibold text-blue-900">
                    Chat
                  </span>
                </div>

                {/* Voice Tab */}
                <div className="flex flex-col items-center cursor-pointer opacity-50">
                  <svg
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.95964 18V6H11.293V18H8.95964ZM13.6263 22V2H15.9596V22H13.6263ZM4.29297 14V10H6.6263V14H4.29297ZM18.293 18V6H20.6263V18H18.293ZM22.9596 14V10H25.293V14H22.9596Z"
                      fill="#9B9B9D"
                    />
                  </svg>

                  <span className="text-sm text-gray-500">Voice</span>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="bg-[#006a4d] text-white text-center text-sm rounded-b-xl">
                Powered by AI
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
