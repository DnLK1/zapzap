import { createContext, useState, useContext } from "react";

export const ChatContext = createContext({});

export function ChatContextProvider({ children }) {
  const randomAvatar = [
    "/avatars/guy-1.png",
    "/avatars/guy-2.png",
    "/avatars/guy-3.png",
    "/avatars/guy-4.png",
    "/avatars/girl-1.png",
    "/avatars/girl-2.png",
    "/avatars/girl-3.png",
    "/avatars/girl-4.png",
  ];

  const [fullData, setFullData] = useState([]);
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState(
    randomAvatar[Math.floor(Math.random() * randomAvatar.length)]
  );
  const [tempAvatar, setTempAvatar] = useState("");
  const [tempDeletedGroup, setTempDeletedGroup] = useState("");
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
        avatar,
        setAvatar,
        tempDeletedGroup,
        setTempDeletedGroup,
        tempAvatar,
        setTempAvatar,
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
