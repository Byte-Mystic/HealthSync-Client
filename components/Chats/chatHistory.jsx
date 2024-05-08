import { useEffect, useState } from "react";
import { RiDeleteBin5Line, RiAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatHistory = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const [deleteChat, setDeleteChat] = useState(false);

  const navigate = useNavigate()

  const handleDeleteConversation = async (topic, chatId) => {
    try {
      const res = await fetch(`/api/chat/delete/${chatId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${currentUser.access}`,
        },
      });
      navigate("/dashboard");
      setDeleteChat((prev) => !prev);
      toast.success(`${topic} deleted successfully.`)
    } catch (error) {
      console.error("Error deleting conversation:", error);
      toast.error(`${topic} is not deleted.`)
    }
  };

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
      toast.success(`${newChatTopic} Chat Room created successfully.`)
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

  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <div className="h-full w-full pt-6 px-6 flex flex-col justify-between border-t border-neutral-600">
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-between gap-2">
          <p className="font-medium text-lg text-neutral-500">Chat history</p>
          <p className="py-1 px-2 font-medium rounded-2xl text-xs text-gray-300 bg-neutral-600">
            {conversations.length}/100
          </p>
        </span>
      </div>

      <div className="h-full my-4 flex flex-col gap-4 overflow-y-scroll scrollbar-none">
        {conversations?.map((conversation, key) => (
          <Link key={key} to={`/dashboard/${conversation.chat_id}`}>
            <div className="flex items-center justify-between gap-2">
              <span
                className="text-lg pl-2 font-medium transition text-neutral-300 ease-in-out duration-300 delay-75 hover:text-neutral-100 hover:scale-110"
              >
                {conversation.topic}
              </span>
              <RiDeleteBin5Line className="text-xl text-neutral-500 transition ease-in-out duration-300 delay-75 hover:text-red-600 cursor-pointer"
                onClick={() => handleDeleteConversation(conversation.topic, conversation.chat_id)} />
            </div>
          </Link>
        ))}

      </div>
      <button onClick={handleCreateNewChat} className="p-3 flex items-center justify-center bg-sky-500 rounded-lg transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
        <RiAddFill className="text-lg text-white" />
        <p className="ml-2 font-medium text-sm text-white">New Chat</p>
      </button>
    </div>
    </>
  );
};

export default ChatHistory;
