import { useEffect, useState } from "react";
import { RiDeleteBin5Line, RiAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const ChatHistory = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isSelected, setIsSelected] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const [deleteChat, setDeleteChat] = useState(false);
  const navigate = useNavigate()

  const handleCreateNewChat = async () => {
    try {
      const newChatTopic = prompt("Enter the topic for new Chat: ");
      if (newChatTopic === null) {
        return;
      }
      setNewChat(true);
      const createChatResponse = await fetch("/api/chat/create-new-chat/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${currentUser.access}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: newChatTopic }),
      });
      if (!createChatResponse.ok) {
        throw new Error(`HTTP error! status: ${createChatResponse.status}`);
      }
      const createdChat = await createChatResponse.json();
      setConversations((prevConversations) => [
        ...prevConversations,
        createdChat,
      ]);
    } catch (error) {
      console.error("Error Creating new chat: ", error);
    } finally {
      setNewChat(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const listChatResponse = await fetch("/api/chat/list-chats/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${currentUser.access}`
          }
        })
        if (!listChatResponse.ok) {
          throw new Error(`HTTP error! Status: ${listChatResponse.status}`);
        }

        const listChatsData = await listChatResponse.json();
        setConversations(listChatsData);
      } catch (error) {
        console.error("Error fetching chat: ", error)
      }
    };
    fetchData();
  }, [newChat, deleteChat])
  const handleCheck = (e) => {
    setIsSelected(e.target.checked);
  };

  return (
    <div className="h-full w-full pt-6 px-6 flex flex-col border-t border-neutral-600">
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-between gap-2">
          <p className="font-medium text-sm text-neutral-500">Chat history</p>
          <p className="py-1 px-2 font-medium rounded-2xl text-xs text-gray-300 bg-neutral-600">
            {conversations.length}/100
          </p>
        </span>
        <RiDeleteBin5Line className="text-xl text-neutral-500 transition ease-in-out duration-300 delay-75 hover:text-red-600 cursor-pointer" />
      </div>
      <div className="h-96 my-4 flex flex-col gap-4 overflow-y-scroll scrollbar-none">
        {conversations?.map((conversation, key) => (
          <Link key={key} to={`/dashboard/${conversation.chat_id}`}>
            <div className="flex items-center justify-start gap-2">
              <label className="self-start">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={isSelected}
                  onChange={handleCheck}
                />
              </label>
              <span
                className={`text-xs font-medium transition ease-in-out duration-300 delay-75 ${isSelected ? "text-neutral-600" : "text-neutral-300"
                  }`}
              >
                {conversation.topic}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={handleCreateNewChat} className="p-3 flex items-center justify-center bg-sky-500 rounded-lg transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
        <RiAddFill className="text-lg text-white" />
        <p className="ml-2 font-medium text-sm text-white">New Chat</p>
      </button>
    </div>
  );
};

export default ChatHistory;
