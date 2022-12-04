import User from "assets/img/user.svg"
import { Header } from "components/common/Header"
import nft0 from "assets/img/nft0.png"
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
    <Header title={"Item Detail"} hasBack />
    <div className="content full black">
      <div className="nft-detail mb50">
        <div className="nft-img">
          <img src={nft0} alt="" />
        </div>
        <div className="img-detail detail">
          <div className="img-top-info">
            <p className="title">
              Pick AXE
            </p>

            <div className="author-container">
              <div className="mr24">
                <p className="author local-icon">
                  30:70 Revenue Share
                </p>
              </div>
              <p className="date date-icon">12 days</p>
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


      <div className="pl42 pr42">
        <div className="over-view">
          <p className="content-title mb12">
            Description
          </p>
          <p>
          Pickaxes used in the ETHIndia MINER P2E mining game
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

        
        <div className="pb30">
          <Link to="/rent">
            <div className="rent-button d-flex x-center ">
              <p>Rent Item</p>
            </div>
          </Link>
        </div>

      </div>


    </div>
  </div>
}
