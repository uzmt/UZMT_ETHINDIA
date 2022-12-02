
import Main from "assets/img/rent-img.png"
import User from "assets/img/user.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CommonButton } from "components/common/CommonButton"
import Eth from "assets/img/eth-b.svg"

export const StepEnd = () => {
  const navigate = useNavigate()

  return <>
    <div className="mb36">
      <p className="opacity3 color-black tl">
        Lending Step 02
      </p>
      <h3 className="color-black tl">
        Check the <br />
        Lent information.
      </h3>
    </div>

    <div className="mb24">
      <div className="mint-item">
        <div className="mit-img mb12">
          <img src={Main} alt="main" />
        </div>

        <div className="top-desc light">
          <p className="title color-black">
            CloneX #5083
          </p>

          <div className="d-flex y-center">
            <div className="mr24">
              <p className="author change-icon color-black opacity100">
                7:3 Revenue Share
              </p>
            </div>
            <p className="date date-icon icon-black color-black opacity100">2022. 11. 31 ~ 2022. 12. 05</p>
          </div>
        </div>

        <div className="d-flex x-eq">
          <div className="profile-container mr23">
            <div className="user-profile">
              <img src={User} alt="user-icon" />
            </div>

            <div className="user-detail">
              <p className="color-black weight800">Soogyeom Kim</p>
              <p className="cnt color-black opacity100">NFT Owner(me)</p>
            </div>
          </div>

          <div className="price">
            <div className="mr5">
              <img src={Eth} alt="" />
            </div>
            <p className="price-text color-black mr2">0.321</p>
            <p className="price-unit color-black opacity5">ETH</p>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex">
      <CommonButton text="Sell list" containerClass="flex1 black mr8" />
      <CommonButton text="Profile" containerClass="flex2" onClick={() => navigate("/home")} />
    </div>
  </>
}
