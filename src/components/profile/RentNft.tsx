import Eth from "assets/img/eth.svg"
import Nft1 from "assets/img/nft1.png"
import Nft2 from "assets/img/nft2.png"
import Nft3 from "assets/img/nft3.png"
import Nft4 from "assets/img/nft4.png"
import Nft5 from "assets/img/nft5.png"
import { CommonButton } from "components/common/CommonButton"
import User from "../../assets/img/tab-user.svg"

export const RentNft = ({ num }: { num?: number }) => {
  let nft = Nft1
  if (num === 2) nft = Nft2
  if (num === 3) nft = Nft3
  if (num === 4) nft = Nft4
  if (num === 5) nft = Nft5


  return <>
    <div className="full-img-container">
      <img src={nft} alt="nft" className={"top-border"} />
    </div>

    <div className="mint-item no-top-border black mb20">
      <div className="top-desc black">
        <p className="mt12 title">
          CloneX #5083
        </p>

        <div className="d-flex y-center">
          <div className="mr24">
            <p className="author change-icon gray-icon opacity100">
              7:3 Revenue Share
            </p>
          </div>
          <p className="date date-icon opacity100">
            12 Days
          </p>
        </div>
      </div>

      <div className="d-flex x-eq">
        <div className="profile-container mr23">
          <div className="user-profile">
            <img src={User} alt="user-icon" />
          </div>

          <div className="user-detail">
            <p className="weight800">Soogyeom Kim</p>
            <p className="cnt opacity100">NFT Owner(me)</p>
          </div>
        </div>

        <CommonButton text={"rent"} containerClass={"middle"} />
      </div>
    </div>
  </>
}
