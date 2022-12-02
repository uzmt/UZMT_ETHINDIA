import Home from "../../assets/img/tab-home.svg"
import HomeL from "../../assets/img/tab-home-l.svg"
import Search from "../../assets/img/tab-search.svg"
import SearchL from "../../assets/img/tab-search-l.svg"
import Social from "../../assets/img/tab-social.svg"
import SocialL from "../../assets/img/tab-social-l.svg"
import Plus from "../../assets/img/plus.svg"
import User from "../../assets/img/tab-user.svg"
import { useNavigate } from "react-router-dom"

export const BottomTab = ({ activeTab, theme = "dark" }: { activeTab?: string, theme?: "dark" | "light" }) => {
  const nav = useNavigate()
  return <div className="tab-wrap">
    <div className={`tab-container ${theme}`}>
      <div className="tab" onClick={() => nav("/home")}>
        {theme === "dark" && <img src={Home} />}
        {theme === "light" && <img src={HomeL} />}
      </div>
      <div className="tab" onClick={() => nav("/search")}>
        {theme === "dark" && <img src={Search} />}
        {theme === "light" && <img src={SearchL} />}
      </div>
      <div className="tab" onClick={() => nav("/connect")}>
        <div className="plus-container">
          <img src={Plus} alt="" />
        </div>
      </div>
      <div className="tab" onClick={() => nav("/chat")}>
        {theme === "dark" && <img src={Social} />}
        {theme === "light" && <img src={SocialL} />}
      </div>
      <div className="tab" onClick={() => nav("/profile")}>
        <img src={User} alt="" />
      </div>
    </div></div>
}
