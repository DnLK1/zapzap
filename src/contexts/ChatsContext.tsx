import { createContext, useState, useContext } from "react";

export const ChatContext = createContext({});

export function ChatContextProvider({ children }) {
  const [fullData, setFullData] = useState([]);
  const [user, setUser] = useState("");
  const [tempMessage, setTempMessage] = useState("");
  const [tempGroup, setTempGroup] = useState("");
  const [tempMember, setTempMember] = useState("");
  const [membersList, setMembersList] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState();
  const [channelsMessageHistory, setChannelsMessageHistory] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(0);
  const [enableFields, setEnableFields] = useState(true);

  return (
    <ChatContext.Provider
      value={{
        fullData,
        setFullData,
        user,
        setUser,
        tempMessage,
        setTempMessage,
        channelsMessageHistory,
        setChannelsMessageHistory,
        membersList,
        setMembersList,
        shouldUpdate,
        setShouldUpdate,
        currentChatIndex,
        setCurrentChatIndex,
        tempGroup,
        setTempGroup,
        tempMember,
        setTempMember,
        enableFields,
        setEnableFields,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  return useContext(ChatContext);
};
