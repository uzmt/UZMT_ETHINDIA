import { Link, useNavigate } from "react-router-dom"
import Logo from "assets/img/logo-w.svg"
import Bell from "assets/img/bell.svg"
import DetailImg from "assets/img/detail-img.png"
import { useState } from "react"
import { TabMint } from "components/home/TabMint"
import { TabRent } from "components/home/TabRent"

export const GameDetail = () => {
  const [tab, setTab] = useState<"MINT" | "RENT">("MINT")
  return <div className="app game-container">
    <div className="home-tab-container">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <p className="name no-margin">
        PURCHASE / RENT
      </p>
      <div className="bell-container">
        <img src={Bell} alt="bell" />
      </div>
    </div>

    <div className="game-img">
      <div className="img-title">
        <h2 className="big mb10">Axie Infinity</h2>
        <p className="h2-desc">3,214 Items</p>
      </div>
      <div className="dim"></div>
      <img src={DetailImg} alt="game" />

    </div>

    <div className="game-tap mb20">
      <div className={`tab ${tab === "MINT" ? "active" : ""}`} onClick={() => setTab("MINT")}>
        <p>Purchase</p>
      </div>
      <div className={`tab ${tab === "RENT" ? "active" : ""}`} onClick={() => setTab("RENT")}>
        <p>RENT</p>
      </div>
    </div>

    <div className="pb50">
      {tab === "MINT" && <TabMint />}
      {tab === "RENT" && <TabRent />}
    </div>


  </div>
}
