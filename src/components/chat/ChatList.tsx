import User1 from "assets/img/user1.svg"
import User2 from "assets/img/user2.svg"
import User3 from "assets/img/user3.svg"
import User4 from "assets/img/user4.svg"
import User5 from "assets/img/user5.svg"
import { Link } from "react-router-dom"

export const ChatList = () => {

  return <div className="chat-user-list-container">
    <Link to="/room">
      <div className="user">
        <div className="profile">
          <img src={User1} alt="" />
        </div>
        <div className="text-content">
          <div className="name-container">
            <h4 className="name clip-text">Salvador DaliSalvador DaliSalvador DaliSalvador DaliSalvador Dali</h4>
            <div className="new">3</div>
          </div>
          <div className="msg-container">
            <p className="message">What can I do for this?!</p>
            <p className="date">Just now</p>
          </div>
        </div>
      </div>
    </Link>


    <div className="user visit">
      <div className="profile">
        <img src={User2} alt="" />
      </div>
      <div className="text-content">
        <div className="name-container">
          <h4 className="name clip-text">Salvador DaliSalvador DaliSalvador DaliSalvador DaliSalvador Dali</h4>
        </div>
        <div className="msg-container">
          <p className="message">What can I do for this?!</p>
          <p className="date">Just now</p>
        </div>
      </div>
    </div>


    <div className="user visit">
      <div className="profile">
        <img src={User1} alt="" />
      </div>
      <div className="text-content">
        <div className="name-container">
          <h4 className="name clip-text">Salvador DaliSalvador DaliSalvador DaliSalvador DaliSalvador Dali</h4>
        </div>
        <div className="msg-container">
          <p className="message">What can I do for this?!</p>
          <p className="date">Just now</p>
        </div>
      </div>
    </div>

    <div className="user visit">
      <div className="profile">
        <img src={User1} alt="" />
      </div>
      <div className="text-content">
        <div className="name-container">
          <h4 className="name clip-text">Salvador DaliSalvador DaliSalvador DaliSalvador DaliSalvador Dali</h4>
        </div>
        <div className="msg-container">
          <p className="message">What can I do for this?!</p>
          <p className="date">Just now</p>
        </div>
      </div>
    </div>

    <div className="user visit">
      <div className="profile">
        <img src={User1} alt="" />
      </div>
      <div className="text-content">
        <div className="name-container">
          <h4 className="name clip-text">Salvador DaliSalvador DaliSalvador DaliSalvador DaliSalvador Dali</h4>
        </div>
        <div className="msg-container">
          <p className="message">What can I do for this?!</p>
          <p className="date">Just now</p>
        </div>
      </div>
    </div>

  </div>
}
