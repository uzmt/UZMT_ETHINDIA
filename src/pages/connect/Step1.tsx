import { CommonButton } from "components/common/CommonButton"
import Main from "assets/img/rent-img.png"
import User from "assets/img/user.svg"
import Eth from "assets/img/eth-b.svg"

interface Props {
  next: () => void
  name1: string
  name2: string
  setName1: React.Dispatch<React.SetStateAction<string>>
  setName2: React.Dispatch<React.SetStateAction<string>>
}

export const Step1 = ({ next, name1, name2, setName1, setName2 }: Props) => {

  return <>
    <div className="mb36">
      <p className="opacity3 color-black tl">
        Lending Step 01
      </p>
      <h3 className="color-black tl">
        Lists <br />
        your NFT Lend.
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
            <div className="mr24 change-icon small-left gray-icon">
              <p className="author color-black opacity100 need-input">
                {name1}
              </p>
            </div>
            <div className="date-icon small-left gray-icon">
              <p className="date icon-black color-black opacity100 need-input">{name2}</p>
            </div>
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

    <div className="mb50">
      <div className="line light"></div>
      <div className="text-input-container">
        <div className="mb4">
          <p className="content-title color-black">Revenue Share Ratio</p>
          <h4 className="desc color-black mb12">Please set your NFT’s revenue share ratio</h4>
          <div className="d-flex y-center">
            <input className="common-input" type="text" onChange={e => setName1(e.target.value)} />
            <span className="dot">:</span>
            <input className="common-input" type="text" onChange={e => setName2(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="line light"></div>
    </div>


    <div className="mb50">
      <CommonButton text="Next" containerClass={`${name1 && name2 ? "" : "opacity3"}`} onClick={
        name1 && name2 ? next : () => { }}
      />
    </div>
  </>
}
