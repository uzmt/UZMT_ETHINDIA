import { BottomTab } from "components/common/BottomTab"
import Banner from "assets/img/banner.jpg"
import User from "assets/img/tab-user.svg"
import { useState } from "react"
import { TabMyNft } from "components/profile/TabMyNft"
import { TabRent } from "components/profile/TabRent"
import { TabInSell } from "components/profile/TabInSell"

export const Profile = () => {
  const [tab, setTab] = useState<"my" | "sell" | "rent">("my")

  return <div className="app black">
    <div className="pb90">
      <div className="profile-bg"></div>
      <div className="">
        <div className="banner mb80">
          <img src={Banner} className="banner-img" />
          <div className="profile">
            <div className="inner">
              <img src={User} alt="" />
            </div>
          </div>
        </div>
        <div className="tc mb30">
          <h3 className="title mb8">
            Soogyeom Kim
          </h3>
          <p className="desc opacity8">
            Here 👋 We lend you NFT at a reasonable<br />
            price! Follow me and check out more tickets...
          </p>
        </div>

        <div className="tc">
          <div className="edit-button mb40">
            <p className="menu-title bold">
              Edit Profile
            </p>
          </div>
        </div>


        <div className="cnt-container mb40">
          <p>
            <span className="cnt">20</span> <br />
            Tickets
          </p>
          <p>
            <span className="cnt">3.1K</span> <br />
            Followers
          </p>
          <p>
            <span className="cnt">
              25
            </span>
            <br />
            Following
          </p>
        </div>

        <div className="main-tab">
          <div className={`tab ${tab === "my" ? "active" : ""}`} onClick={() => setTab("my")}>
            <p>My NFT</p>
          </div>
          <div className={`tab ${tab === "sell" ? "active" : ""}`} onClick={() => setTab("sell")}>
            <p>NFT in sell</p>
          </div>
          <div className={`tab ${tab === "rent" ? "active" : ""}`} onClick={() => setTab("rent")}>
            <p>NFT in Rent</p>
          </div>
        </div>


        {tab === "my" && <TabMyNft />}
        {tab === "sell" && <TabInSell />}
        {tab === "rent" && <TabRent />}


      </div>
    </div>
    <BottomTab theme={"light"} />
  </div>

}
