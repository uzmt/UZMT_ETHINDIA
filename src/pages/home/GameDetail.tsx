import { Link, useNavigate } from "react-router-dom"
import Logo from "assets/img/logo-w.svg"
import Bell from "assets/img/bell.svg"
import DetailImg from "assets/img/detail-img.png"
import { useState } from "react"
import User from "assets/img/user.svg"
import NftImg from "assets/img/nft-img.png"
import Eth from "assets/img/eth.svg"

export const GameDetail = () => {
  const navigate = useNavigate()
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
      <img src={DetailImg} alt="game" />
    </div>

    <div className="game-tap">
      <div className={`tab ${tab === "MINT" ? "active" : ""}`} onClick={() => setTab("MINT")}>
        <p>Purchase</p>
      </div>
      <div className={`tab ${tab === "RENT" ? "active" : ""}`} onClick={() => setTab("RENT")}>
        <p>RENT</p>
      </div>
    </div>

    <div className="pb50">
      {tab === "MINT" && <>
        <div className="nft-info">
          <div className="nft-img">
            <img src={NftImg} alt="NftImg" />
          </div>

          <div className="img-detail">
            <div className="img-top-info">
              <p className="title">
                Axie #35786
              </p>

              <div className="author-container">
                <div className="mr24">
                  <p className="author local-icon">
                    Bengaluru
                  </p>
                </div>
              </div>
            </div>

            <div className="img-bottom-info">
              <div className="profile-container mr23">
                <div className="user-profile">
                  <img src={User} alt="user-icon" />
                </div>

                <div className="user-detail">
                  <p className="name">Salvador Dali</p>
                  <p className="cnt">23,201 Rent Tickets</p>
                </div>
              </div>

              <div className="">
                <Link to="/detail">
                  <div className="price-button">
                    <div className="mr0">
                      <img src={Eth} alt="eth" />
                    </div>
                    <p className="price-text">0.321</p>
                    <p className="price-unit">ETH</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="nft-info">
          <div className="nft-img">
            <img src={NftImg} alt="NftImg" />
          </div>

          <div className="img-detail">
            <div className="img-top-info">
              <p className="title">
                Axie #35786
              </p>

              <div className="author-container">
                <div className="mr24">
                  <p className="author local-icon">
                    Bengaluru
                  </p>
                </div>
              </div>
            </div>

            <div className="img-bottom-info">
              <div className="profile-container mr23">
                <div className="user-profile">
                  <img src={User} alt="user-icon" />
                </div>

                <div className="user-detail">
                  <p className="name">Salvador Dali</p>
                  <p className="cnt">23,201 Rent Tickets</p>
                </div>
              </div>

              <div className="">
                <Link to="/detail">
                  <div className="price-button">
                    <div className="mr0">
                      <img src={Eth} alt="eth" />
                    </div>
                    <p className="price-text">0.321</p>
                    <p className="price-unit">ETH</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
      }

      {tab === "RENT" && <>
        <div className="nft-info">
          <div className="nft-img">
            <img src={NftImg} alt="NftImg" />
          </div>

          <div className="img-detail">
            <div className="img-top-info">
              <p className="title">
                Axie #35786
              </p>

              <div className="author-container">
                <div className="mr24">
                  <p className="author local-icon">
                    Bengaluru
                  </p>
                </div>
                <p className="date date-icon">2022. 11. 31 ~ 2022. 12. 05</p>
              </div>
            </div>

            <div className="img-bottom-info">
              <div className="profile-container mr23">
                <div className="user-profile">
                  <img src={User} alt="user-icon" />
                </div>

                <div className="user-detail">
                  <p className="name">Salvador Dali</p>
                  <p className="cnt">23,201 Rent Tickets</p>
                </div>
              </div>

              <div className="">
                <Link to="/detail">
                  <div className="price-button">
                    <div className="mr0">
                      <img src={Eth} alt="eth" />
                    </div>
                    <p className="price-text">0.321</p>
                    <p className="price-unit">ETH</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>


  </div>
}
