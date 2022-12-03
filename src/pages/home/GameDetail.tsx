import { Link, useNavigate } from "react-router-dom"
import Logo from "assets/img/logo-w.svg"
import Bell from "assets/img/bell.svg"
import DetailImg from "assets/img/detail-img.png"
import Arrow from "assets/img/Arrow_icon.png"
import Whole from "assets/img/whole_icon.png"
import Avatar from "assets/img/Avatar_icon.png"
import { useState } from "react"
import { TabMint } from "components/home/TabMint"
import { TabRent } from "components/home/TabRent"
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


export const GameDetail = () => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const [tab, setTab] = useState<"MINT" | "RENT">("RENT")
  return (
    <>
    <div className="app home-tab-container">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
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
    

    <div className="game-img">
      <div className="img-title">
        <h2 className="big mb10">UZMT</h2>
        <p className="h2-desc">1 Items</p>
      </div>
      <div className="dim"></div>
      <img src={DetailImg} alt="game" />

    </div>

    <div className="game-tap mb20">
      <div className={`tab ${tab === "RENT" ? "active" : ""}`} onClick={() => setTab("RENT")}>
        <p>RENT</p>
      </div>
      { 
      
      //<div className={`tab ${tab === "MINT" ? "active" : ""}`} onClick={() => setTab("MINT")}>
      //  <p>Purchase</p>
      //</div>
      }
    </div>

    <div className="pb50">
      {tab === "RENT" && <TabRent />}
    </div>


  </div>
  </>)
}
