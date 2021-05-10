import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

type Member = {
  user: string;
  avatar: string;
};

type Message = {
  sender: string;
  content: string;
  published_at: string;
  channel_id: string;
};

type ChannelsList = {
  id: string;
  title: string;
  members: Member[];
  messages: Message[];
};

type MessageHistory = {
  messages: Message[];
};

type Members = {
  members: Member[];
};

type ChatContextData = {
  fullData: ChannelsList[];
  setFullData: (state: ChannelsList[]) => void;
  user: string;
  setUser: (state: string) => void;
  avatar: string;
  setAvatar: (state: string) => void;
  tempDeletedGroup: string;
  setTempDeletedGroup: (state: string) => void;
  tempAvatar: string;
  setTempAvatar: (state: string) => void;
  tempMessage: string;
  setTempMessage: (state: string) => void;
  channelsMessageHistory: MessageHistory[];
  setChannelsMessageHistory: (state: MessageHistory[]) => void;
  membersList: Members[];
  setMembersList: (state: Members[]) => void;
  shouldUpdate: number;
  setShouldUpdate: (state: number) => void;
  currentChatIndex: number;
  setCurrentChatIndex: (state: number) => void;
  tempGroup: string;
  setTempGroup: (state: string) => void;
  tempMember: string;
  setTempMember: (state: string) => void;
  enableFields: boolean;
  setEnableFields: (state: boolean) => void;
};

type ChatContextProviderProps = {
  children: ReactNode;
};

export const ChatContext = createContext({} as ChatContextData);

export function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [fullData, setFullData] = useState([]);
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  const [tempAvatar, setTempAvatar] = useState("");
  const [tempDeletedGroup, setTempDeletedGroup] = useState("nenhum");
  const [tempMessage, setTempMessage] = useState("");
  const [tempGroup, setTempGroup] = useState("");
  const [tempMember, setTempMember] = useState("");
  const [membersList, setMembersList] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(-1);
  const [channelsMessageHistory, setChannelsMessageHistory] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(0);
  const [enableFields, setEnableFields] = useState(true);

  useEffect(() => {
    const randomAvatarSelection = [
      "/avatars/guy-1.png",
      "/avatars/guy-2.png",
      "/avatars/guy-3.png",
      "/avatars/guy-4.png",
      "/avatars/girl-1.png",
      "/avatars/girl-2.png",
      "/avatars/girl-3.png",
      "/avatars/girl-4.png",
    ];

    const pickRandomAvatar =
      randomAvatarSelection[
        Math.floor(Math.random() * randomAvatarSelection.length)
      ];

    setAvatar(pickRandomAvatar);
  }, []);

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
