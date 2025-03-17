import { createContext, useContext, useState } from "react";

// Create Chat Context
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const API_URL = "https://mortgage-ai-api.onrender.com/chat";

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: `**Hello John Doe,** get personalised assistance for your mortgage needs.  
  
  💡 **We assist you with**  
  - Personalised, Integrated experience  
  - Faster home buying process  
  
  **How can I help you today?**`,
      type: "bot",
    },
  ]);

  const [input, setInput] = useState("");

 // Function to display AI response with typing effect
 const typeBotMessage = (message, delay = 50) => {
  setIsTyping(true);
  let currentText = "";
  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < message.length) {
      currentText += message[index];
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.type === "bot") {
          return [
            ...prevMessages.slice(0, -1),
            { text: currentText, type: "bot" },
          ];
        } else {
          return [...prevMessages, { text: currentText, type: "bot" }];
        }
      });
      index++;
    } else {
      clearInterval(typingInterval);
      setIsTyping(false);
    }
  }, delay);
};


const sendMessageToBackend = async (userMessage) => {
  setIsTyping(true);

  const payload = {
    user_id: "101",
    message: userMessage,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const result = await response.json(); // Parse JSON properly
    const botMessage = result.response; // Extract actual bot response

    // Use typing effect to display AI response
    typeBotMessage(botMessage, 35);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    setMessages((prev) => [
      ...prev,
      { text: "Sorry, I couldn't process that. Try again.", type: "bot" },
    ]);
    setIsTyping(false);
  }
};




/*
const sendMessageToBackend = async (userMessage) => {
  setIsTyping(true);

  const myHeaders = new Headers();
  myHeaders.append("Origin", "http://localhost:4200");
  myHeaders.append("Authorization", "Bearer *****Token*****");
  myHeaders.append("Content-Type", "application/json");

  const payload = JSON.stringify({
    provider_name: "AzureOpenAI",
    model_name: "gpt-4o",
    temperature: 0.1,
    human_message: userMessage, 
    system_message: "",
    context: "***************************************** REPLACE THIS ***********************",
    module_type: "BusinessModule",
    fetch_from_db: false,
    include_chat_history: true,
    should_clear_session: false,
    no_of_past_messages: 10
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: payload,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://sit.nonprod.tcsaivisdomnext.tcsapps.com/wisdomv3/api/ragnormal/chat/defined-context/925/16",
      requestOptions
    );

    const result = await response.json();
    const botMessage = result.response || "Sorry, I couldn't process that."; 

    typeBotMessage(botMessage, 35);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    setMessages((prev) => [
      ...prev,
      { text: "Sorry, I couldn't process that. Try again.", type: "bot" },
    ]);
    setIsTyping(false);
  }
};
*/







const handleSendMessage = () => {
  if (!input.trim()) return;
  setMessages([...messages, { text: input, type: "user" }]);
  sendMessageToBackend(input);
  setInput("");
};



  return (
    <ChatContext.Provider value={{ messages, setMessages,isTyping,setIsTyping,handleSendMessage,sendMessageToBackend,typeBotMessage,input, setInput }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
