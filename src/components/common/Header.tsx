import Arr from "assets/img/arr-left.svg"
import ArrB from "assets/img/arr-left-b.svg"
import Menu from "assets/img/menu-right.svg"
import { useNavigate } from "react-router-dom"

export const Header = ({
  title, hasBack, hasMenu, theme = "dark", backFn }:
  { title?: string, hasBack?: boolean, hasMenu?: boolean, theme?: "dark" | "light", backFn?: () => void }) => {
  const nav = useNavigate()

  return <div className={`common-menu ${theme}`}>
    <div className="icon" onClick={() => hasBack ? nav(-1) : backFn ? backFn : null} >
      {(hasBack || backFn) && theme === "dark" && <img src={Arr} alt="arr-left" />}
      {(hasBack || backFn) && theme === "light" && <img src={ArrB} alt="arr-left" />}
    </div>
    <p className="menu-title">
      {title}
    </p>
    <div className="icon">
      {hasMenu && <img src={Menu} />}
    </div>
  </div>
}
