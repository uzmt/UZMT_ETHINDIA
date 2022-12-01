import { Link } from "react-router-dom"
import Star from "../../assets/img/star.svg"

export const LaunchButton = ({ type, containerStyle }: { type?: "type1" | "type2", containerStyle?: string }) => {

  return <Link to="/game" className={`lunch-button ${type} ${containerStyle}`}>
    <p>
      Lunch the app
    </p>

    <img src={Star} alt="star" />
  </Link>
}
