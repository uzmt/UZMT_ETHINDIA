import GameImg from "assets/img/game-img.png"
import Bell from "assets/img/bell.svg"
import Logo from "assets/img/logo-w.svg"
import Game1 from "assets/img/game1.png"
import Game2 from "assets/img/game2.png"
import Game3 from "assets/img/game3.png"
import Game4 from "assets/img/game4.png"
import Game5 from "assets/img/game5.png"
import Game6 from "assets/img/game6.png"
import AxieInfinity from "assets/img/AxieInfinity.png"
import AxieProfile from "assets/img/AxieProfile.png"
import ITSBLOC from "assets/img/ITSBLOC.png"
import ITSBLOCProfile from "assets/img/ITSBLOC_Profile.png"
import SPLINTERLAND from "assets/img/SplinterLands.png"
import SPLINTERLANDProfile from "assets/img/SplinterLands_Profile.png"
import GodsUnchained from "assets/img/GodsUnchained.png"
import GodsUnchainedProfile from "assets/img/GodsUnchaind_Profile.png"
import HighLight from "assets/img/Contour.png"
import GameHomeBanner from "assets/img/Game_Home_Banner.png"
import { Link } from "react-router-dom"
import { ViewButton } from "components/common/ViewButton"
import { GameCard } from "components/game/GameCard"

const Games = [
  {
    mainImg: AxieInfinity,
    profileImg: AxieProfile,
    projectTitle: "Axie Infinity",
    nftNum: "3214",
    to: "/",
  },
  {
    mainImg: ITSBLOC,
    profileImg: ITSBLOCProfile,
    projectTitle: "ITSBLOC",
    nftNum: "3214",
    to: "/",
  },
  {
    mainImg: SPLINTERLAND,
    profileImg: SPLINTERLANDProfile,
    projectTitle: "SplinterLands",
    nftNum: "3214",
    to: "/",
  },
  {
    mainImg: GodsUnchained,
    profileImg: GodsUnchainedProfile,
    projectTitle: "Gods Unchained",
    nftNum: "3214",
    to: "/",
  },
  

]

export const GameHome = () => {
  return (
    <>
    <div className="app home-tab-container">
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <p className="title no-margin">
      
    </p>
    <div className="bell-container">
      <img src={Bell} alt="bell" />
    </div>
  </div>
  <div className="app game-container">


    <div className="game-head">
      <h2>Highlight</h2>
      <img src={HighLight} alt="highlight" />
    </div>

    <div className="game-banner">
    <img src={GameHomeBanner} alt="gamehome" />
      <button className="game-play">Play now</button>
      <button className="game-view">View more</button>

      <p className="head">UZMT</p>
      <p className="middle">Let's be the king of mining!</p>
    </div>

    <div className="all-games">
      <h2 className="mb20">All Games</h2>
      {
        Games.map((Game) => (
          <GameCard mainImg={Game.mainImg} profileImg={Game.profileImg} projectTitle={Game.projectTitle} nftNum={Game.nftNum} to={Game.to} />
        ))
      }
    </div>
    

  </div>
  </>
  )
}
