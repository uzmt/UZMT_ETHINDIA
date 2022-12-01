import { BottomTab } from "components/common/BottomTab"

export const Profile = () => {

  return <div>
    <div className="profile-bg"></div>
    <div className="">
      <img />
      <div>
        <p className="name">
          Soogyeom Kim
        </p>
        <p className="desc">
          Here 👋 We lend you NFT at a reasonable<br />
          price! Follow me and check out more tickets...
        </p>
      </div>

      <div className="Edit Profile">
        Edit Profile
      </div>

      <div className="cnt-container">
        <p>
          20
          Tickets
        </p>
        <p>
          3.1K
          Followers
        </p>
        <p>
          25
          Following
        </p>
      </div>

      <div className="tab">

      </div>



    </div>
    <BottomTab theme={"light"} />
  </div>

}
