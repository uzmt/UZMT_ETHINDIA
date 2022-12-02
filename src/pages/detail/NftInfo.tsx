import User from "assets/img/user.svg"
import { Header } from "components/common/Header"
import NftImg from "assets/img/nft-img-no-border.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import User1 from "assets/img/user1.svg"
import User2 from "assets/img/user2.svg"
import User3 from "assets/img/user3.svg"
import { NftTabDetail } from "components/detail/NftTabDetail"
import { NftTabInfo } from "components/detail/NftTabInfo"

export const NftInfo = () => {
  const [tab, setTab] = useState<"detail" | "info">("detail")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div className="main app">
    <Header title={"Ticket Detail"} hasBack hasMenu />
    <div className="content full black">
      <div className="nft-detail mb50">
        <div className="nft-img">
          <img src={NftImg} alt="" />
        </div>
        <div className="img-detail detail">
          <div className="img-top-info">
            <p className="title">
              Axie #35786
            </p>

            <div className="author-container">
              <div className="mr24">
                <p className="author local-icon">
                  Axie Infinity
                </p>
              </div>
              <p className="date date-icon">2022. 11. 31 ~ 2022. 12. 05</p>
            </div>
          </div>

          <div className="card-info mt20">
            <div className="profile-container mr23">
              <div className="user-profile">
                <img src={User} alt="user-icon" />
              </div>

              <div className="user-detail">
                <p className="name">Salvador Dali</p>
                <p className="cnt">23,201 Rent Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="pl24 pr24">
        <div className="over-view">
          <p className="content-title mb12">
            Ticket overview
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>

      <div className="main-tab">
        <div className={`tab ${tab === "detail" ? "active" : ""}`} onClick={() => setTab("detail")}>
          <p>Detail</p>
        </div>
        <div className={`tab ${tab === "info" ? "active" : ""}`} onClick={() => setTab("info")}>
          <p>NFT Info</p>
        </div>
      </div>

      <div className="pl24 pr24">
        <div className="info">
          {tab === "detail" && <NftTabDetail />}

          {tab === "info" && <NftTabInfo />}

          <div className="line"></div>
        </div>

        <div className="comment-container">
          <p className="content-title mb20">
            Comments
          </p>
          <div className="comment">
            <div className="profile">
              <img src={User1} alt="" />
            </div>
            <div className="">
              <h4 className="name color-white bold mb11">Salvador Dali</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <p className="date color-white">Just now</p>
            </div>
          </div>

          <div className="comment">
            <div className="profile">
              <img src={User2} alt="" />
            </div>
            <div className="">
              <h4 className="name color-white bold mb11">Salvador Dali</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <p className="date color-white">Just now</p>
            </div>
          </div>

          <div className="comment">
            <div className="profile">
              <img src={User3} alt="" />
            </div>
            <div className="">
              <h4 className="name color-white bold mb11">Salvador Dali</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <p className="date color-white">Just now</p>
            </div>
          </div>
        </div>

        <div className="pb30">
          <Link to="/purchase">
            <div className="buy-button">
              <p className="left-buy-text">
                Buy Rent ticket
              </p>
              <div className="right-buy-text eth">
                <p className="price-text big">0.321</p>
                <p className="price-unit big">ETH</p>
              </div>
            </div>
          </Link>
        </div>

      </div>


    </div>
  </div>
}
