import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaArrowCircleUp } from "react-icons/fa";
import { RiVoiceprintLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [chatHeading, setChatHeading] = useState("");
  const [loading, setLoading] = useState(true);
  const { chatid } = useParams();
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {

    const getChatName = async () => {
      if (chatid === undefined) return;
      const res = await fetch(`/api/chat/get-chat-name/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.access}`,
        },
        body: JSON.stringify({ chat_id: chatid }),
      });
      const data = await res.json()
      setChatHeading(data.topic_name.topic)
    };

    const fetchData = async () => {
      if (chatid === undefined) {
        return;
      }
      try {
        const response = await fetch(`/api/chat/list-message/${chatid}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${currentUser.access}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        setConversation(data);
      } catch (error) {
        console.error("Error fetching pre-messages: ", error);
      }
    };
    fetchData();
    getChatName();
  }, [chatid, currentUser.access, messageSent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setInput("");
      setLoading(true);
      const response = await fetch(`/api/chat/chat-with-ai/${chatid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.access}`,
        },
        body: JSON.stringify({ ask: input }),
      });
      console.log(response.json());
      if (response.ok) {
        setMessageSent((prev) => !prev);
      }
      setLoading(false);
      setIsInputEmpty(true);
    } catch (error) {
      console.error("error in sending message", error);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setIsInputEmpty(event.target.value === "");
  };

  return (
    <div className="h-full w-full flex flex-col gap-1 text-center lg:w-3/4 lg:pt-8">
      <h1 className="font-bold text-2xl text-white">{chatHeading!=="" ? chatHeading: "Unlock the power of AI"}</h1>
      <p className="text-sm font-semibold text-gray-500">
        Chat with the smartest AI - Experience the power of AI with us
      </p>
      <div className="h-full p-6 flex flex-col gap-4 overflow-auto">
        <div className="h-4/5 w-full flex flex-col-reverse overflow-y-scroll scrollbar-none">
          {conversation.length > 0 ? (
            conversation
              .slice()
              .reverse()
              .map((message, index) => (
                <div
                  key={index}
                  className="w-full p-2 flex flex-col gap-4 items-end justify-start"
                >
                  <p className="max-h-min max-w-md text-left py-2 px-4 bg-neutral-700 rounded-md text-neutral-200">
                    {message.content}
                  </p>
                  <p className="max-h-min max-w-md text-left self-start py-2 px-4 bg-neutral-700 rounded-md text-neutral-200">
                    {message.response}
                  </p>
                </div>
              ))
          ) : (
            <h1 className="text-2xl text-neutral-500 text-center mt-8">
              Silence in {chatHeading}
            </h1>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full px-6 flex justify-between items-center border-2 border-neutral-600 rounded-full"
        >
          <input
            type="text"
            className="h-16 w-full border-none outline-none bg-transparent text-white text-sm font-medium placeholder:font-normal placeholder:text-neutral-400"
            placeholder="Ask HealthSync anything"
            value={input}
            onChange={handleInputChange}
          />
          <button className="bg-transparent ml-2 border-none" type="submit">
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
