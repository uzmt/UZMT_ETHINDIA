import GameImg from "assets/img/game-img.png"
import Bell from "assets/img/bell.svg"
import Logo from "assets/img/logo-w.svg"
import Game1 from "assets/img/game1.png"
import Game2 from "assets/img/game2.png"
import Game3 from "assets/img/game3.png"
import Game4 from "assets/img/game4.png"
import Game5 from "assets/img/game5.png"
import Game6 from "assets/img/game6.png"
import Arrow from "assets/img/Arrow_icon.png"
import Whole from "assets/img/whole_icon.png"
import Avatar from "assets/img/Avatar_icon.png"
import AxieInfinity from "assets/img/AxieInfinity.png"
import AxieProfile from "assets/img/AxieProfile.png"
import ITSBLOC from "assets/img/ITSBLOC.png"
import ITSBLOCProfile from "assets/img/ITSBLOC_Profile.png"
import SPLINTERLAND from "assets/img/SplinterLands.png"
import SPLINTERLANDProfile from "assets/img/SplinterLands_Profile.png"
import GodsUnchained from "assets/img/GodsUnchained.png"
import GodsUnchainedProfile from "assets/img/GodsUnchaind_Profile.png"
import CryptoBeasts from "assets/img/CryptoBeasts.png"
import HighLight from "assets/img/Contour.png"
import GameHomeBanner from "assets/img/Game_Home_Banner.png"
import { Link } from "react-router-dom"
import { GameCard } from "components/game/GameCard"
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


const Games = [
  {
    mainImg: AxieInfinity,
    profileImg: AxieProfile,
    projectTitle: "Axie Infinity",
    nftNum: "3214",
    to: "/gameDetail",
  },
  {
    mainImg: ITSBLOC,
    profileImg: ITSBLOCProfile,
    projectTitle: "ITSBLOC",
    nftNum: "3214",
    to: "/gameDetail",
  },
  {
    mainImg: SPLINTERLAND,
    profileImg: SPLINTERLANDProfile,
    projectTitle: "SplinterLands",
    nftNum: "3214",
    to: "/gameDetail",
  },
  {
    mainImg: GodsUnchained,
    profileImg: GodsUnchainedProfile,
    projectTitle: "Gods Unchained",
    nftNum: "3214",
    to: "/gameDetail",
  },


]



export const GameHome = () => {

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()






  return (
    <>
      <div className="app home-tab-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <p className="title no-margin">

        </p>
        <div className="bell-container">
          {
            isConnected ? (
              <div>
                <Link to="/profile">
                  <img src={Avatar} className="avatar"/>
                </Link>
              </div>
            ) : (
              <div className="d-flex row y-center">
                <p className="wallet-connect">Tap to Connect wallet</p>
                <img src={Arrow} />
                <img src={Whole} onClick={() => connect()} />
              </div>

            )
          }
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
          <Link to="/gameDetail">
            <button className="game-view">Rent now</button>
          </Link>

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
