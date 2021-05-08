import { createContext, useState, useContext } from "react";

export const ChatContext = createContext({});

export function ChatContextProvider({ children }) {
  const [fullData, setFullData] = useState([]);
  const [tempMessage, setTempMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState();
  const [channelsMessageHistory, setChannelsMessageHistory] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(0);

  return (
    <ChatContext.Provider
      value={{
        fullData,
        setFullData,
        tempMessage,
        setTempMessage,
        chatList,
        setChatList,
        channelsMessageHistory,
        setChannelsMessageHistory,
        membersList,
        setMembersList,
        shouldUpdate,
        setShouldUpdate,
        currentChatIndex,
        setCurrentChatIndex,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  return useContext(ChatContext);
};
