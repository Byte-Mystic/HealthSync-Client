import React from "react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { RiVoiceprintLine } from "react-icons/ri";

const Chat = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = generateResponse(input);
    setConversation([...conversation, { user: input, bot: response }]);
    setInput("");
    setIsInputEmpty(true);
  };

  const generateResponse = (input) => {
    return "Thank you for your query! This is a placeholder response Chat with the smartest AI - Experience the power of AI with us.Thank you for your query! This is a placeholder response Chat with the smartest AI - Experience the power of AI with us.";
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setIsInputEmpty(event.target.value === "");
  };

  return (
    <div className="h-full w-full flex flex-col gap-1 text-center lg:w-3/4 lg:pt-8">
      <h1 className="font-bold text-2xl text-white">Unlock the power of AI</h1>
      <p className="text-sm font-semibold text-gray-500">
        Chat with the smartest AI - Experience the power of AI with us
      </p>
      <div className="h-full p-6 flex flex-col gap-4 overflow-auto">
        <div className="h-4/5 w-full flex flex-col-reverse overflow-y-scroll scrollbar-none">
          {conversation
            .slice()
            .reverse()
            .map((message, index) => (
              <div
                key={index}
                className="w-full p-2 flex flex-col gap-4 items-end justify-start"
              >
                <p className="max-h-min max-w-md text-left py-2 px-4 bg-neutral-700 rounded-md text-neutral-200">
                  {message.user}
                </p>
                <p className="max-h-min max-w-md text-left self-start py-2 px-4 bg-neutral-700 rounded-md text-neutral-200">
                  {message.bot}
                </p>
              </div>
            ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-16 w-full px-6 flex justify-between items-center border-2 border-neutral-600 rounded-full"
        >
          <input
            type="text"
            className="w-full border-none outline-none bg-transparent text-white text-sm font-medium placeholder:font-normal placeholder:text-neutral-400"
            placeholder="Ask HealthSync anything"
            value={input}
            onChange={handleInputChange}
            // onChange={(event) => setInput(event.target.value)}
          />
          <button className="bg-transparent border-none" type="submit">
            {isInputEmpty ? (
              <RiVoiceprintLine className="text-2xl text-neutral-700 hover:text-sky-600 cursor-pointer transition ease-in duration-200" />
            ) : (
              <FaArrowCircleUp className="text-2xl text-sky-500 hover:text-sky-600 cursor-pointer transition ease-in duration-200" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
