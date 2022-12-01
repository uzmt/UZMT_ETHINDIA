import GameImg from "assets/img/game-img.png"
import Bell from "assets/img/bell.svg"
import Logo from "assets/img/logo-w.svg"
import Game1 from "assets/img/game1.png"
import Game2 from "assets/img/game2.png"
import Game3 from "assets/img/game3.png"
import Game4 from "assets/img/game4.png"
import Game5 from "assets/img/game5.png"
import Game6 from "assets/img/game6.png"
import { Link } from "react-router-dom"

export const GameHome = () => {
  return <div className="app game-container">
    <div className="home-tab-container">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <p className="title no-margin">
        All Games
      </p>
      <div className="bell-container">
        <img src={Bell} alt="bell" />
      </div>
    </div>

    <div className="game-img">
      <img src={GameImg} alt="game" />
    </div>

    <div className="game-list">
      <div className="game-item">
        <div className="game-profile">
          <img src={Game1} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>

      </div>

      <div className="game-item">
        <div className="game-profile">
          <img src={Game2} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>
      </div>

      <div className="game-item">
        <div className="game-profile">
          <img src={Game3} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>
      </div>

      <div className="game-item">
        <div className="game-profile">
          <img src={Game4} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>
      </div>

      <div className="game-item">
        <div className="game-profile">
          <img src={Game5} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>
      </div>

      <div className="game-item">
        <div className="game-profile">
          <img src={Game6} alt="" />
        </div>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Purchase / RENT</p>
          </div>
        </Link>

        <Link to="/gameDetail">
          <div className="game-button">
            <p>Play now</p>
          </div>
        </Link>
      </div>

    </div>
  </div>
}
