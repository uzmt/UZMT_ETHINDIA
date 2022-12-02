import { Link, useNavigate } from "react-router-dom"
import User from "assets/img/user.svg"
import NftImg from "assets/img/nft-img.png"
import Eth from "assets/img/eth.svg"
import { CommonButton } from "components/common/CommonButton"

export const TabRent = () => {


  return <>
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

        <div className="img-bottom-info x-eq">
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
            <CommonButton text="rent" containerClass="middle" />
          </div>
        </div>
      </div>
    </div>
  </>
}
