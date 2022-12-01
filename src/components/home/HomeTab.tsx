import Bell from "../../assets/img/bell.svg"
import Logo from "../../assets/img/logo-w.svg"

export const HomeTab = () => {

  return <div className="home-tab-container">
    <img src={Logo} alt="logo" />
    <p>
      Top 20 Ticket
    </p>
    <div className="bell-container">
      <img src={Bell} alt="bell" />
    </div>
  </div>
}
