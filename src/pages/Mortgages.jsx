import React, { useState } from "react";
import { ArrowRightIcon, MicrophoneIcon } from "@heroicons/react/16/solid";
import { useChat } from "../ChatContext/ChatContext";
import ReactMarkdown from "react-markdown";
const Mortgages = () => {
  const { messages, isTyping ,handleSendMessage,input, setInput } = useChat(); 

  const [isListening, setIsListening] = useState(false);


  const handleVoice = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between  pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Hello, How I can assist you?
          </h1>
        </div>


        <div className="h-64 overflow-auto p-3 flex flex-col gap-2">
        {/* Chat Messages */}
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

        {/* Voice Input */}
        <div className="relative flex items-center gap-2 mt-4 pb-4 mb-6">
          <input
            type="text"
            placeholder="Ask a question..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            value={input}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className={`p-2 rounded-full  ${
              isListening ? "bg-red-500" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={handleVoice}
          >
            <MicrophoneIcon
              className={`h-5 w-5  ${
                isListening ? "text-white" : "text-gray-600"
              }`}
            />
          </button>
          <button
            className="p-2 rounded-full bg-primary hover:bg-primary/90"
            onClick={handleSendMessage}
          >
            <ArrowRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Recommendations */}
      </div>
    </div>
  );
};

export default Mortgages;
