import { Link, useNavigate } from "react-router-dom"
import User from "assets/img/user.svg"
import nft0 from "assets/img/nft0.png"
import Eth from "assets/img/eth.svg"
import { CommonButton } from "components/common/CommonButton"

export const TabRent = () => {


  return <>
    <div className="nft-info">
      <div className="nft-img">
        <img src={nft0} alt="NftImg" />
      </div>

      <div className="img-detail">
        <div className="img-top-info">
          <p className="title">
          Pick AXE
          </p>

          <div className="author-container">
            <div className="mr24">
              <p className="author local-icon">
                7:3 Revenue Share
              </p>
            </div>
            <p className="date date-icon">12 days</p>
          </div>
        </div>

        <div className="img-bottom-info x-eq">
          <div className="profile-container mr23">
            <div className="user-profile">
              <img src={User} alt="user-icon" />
            </div>

            <div className="user-detail">
              <p className="name">Salvador Dali</p>
              <p className="cnt">233 Rented</p>
            </div>
          </div>

          <div className="">
          <Link to="/detail">
            <CommonButton text="Rent" containerClass="middle" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  </>
}
