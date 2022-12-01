import User1 from "assets/img/user1.svg"
import User2 from "assets/img/user2.svg"
import User3 from "assets/img/user3.svg"
import User4 from "assets/img/user4.svg"
import User5 from "assets/img/user5.svg"

export const TopChatList = () => {

  return <div className="top-chat-list">
    <div className="user new">
      <div className="circle">
        <img src={User1} alt="" />
      </div>
      <p>Erin Septim</p>
    </div>

    <div className="user">
      <div className="circle">
        <img src={User2} alt="" />
      </div>
      <p>Alena Geor...</p>
    </div>

    <div className="user">
      <div className="circle">
        <img src={User3} alt="" />
      </div>
      <p>Makenna Es...</p>
    </div>

    <div className="user">
      <div className="circle">
        <img src={User4} alt="" />
      </div>
      <p>Makenna Es...</p>
    </div>

    <div className="user">
      <div className="circle">
        <img src={User5} alt="" />
      </div>
      <p>Makenna Es...</p>
    </div>
  </div>
}
