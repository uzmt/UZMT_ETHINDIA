import { BottomTab } from "components/common/BottomTab"
import Edit from "assets/img/note-edit.svg"
import { TopChatList } from "components/chat/TopChatList"
import { ChatList } from "components/chat/ChatList"

export const Chat = () => {

  return <div className="main white">
    <div className="chat-header">
      <p className="chat-title">Direct Message</p>
      <div className="">
        <img src={Edit} alt="" />
      </div>
    </div>
    <TopChatList />
    <div className="content auto">
      <ChatList />
    </div>
    <BottomTab theme={"light"} />
  </div>
}
