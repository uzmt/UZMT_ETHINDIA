import Eth from "assets/img/eth-b.svg"
import Nft1 from "assets/img/nft1.png"
import Nft2 from "assets/img/nft2.png"
import Nft3 from "assets/img/nft3.png"
import Nft4 from "assets/img/nft4.png"
import Nft5 from "assets/img/nft5.png"
import User from "assets/img/user.svg"
import { CommonButton } from "components/common/CommonButton"

export const NftMy = ({ num, hasDate }: { num?: number, hasDate?: boolean }) => {
  let nft = Nft1
  if (num === 2) nft = Nft2
  if (num === 3) nft = Nft3
  if (num === 4) nft = Nft4
  if (num === 5) nft = Nft5

  return <div className="my-nft">
    <div className="my-nft-img mb16">
      <img src={nft} alt="my-nft" />
    </div>
    <div className="img-detail blur small">
      <div className="img-top-info">
        <p className="title">
          Darkness
        </p>

        <div className="author-container">
          <div className="mr24">
            <p className="author dot-icon">
              Yu-Gi-Yn
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

        <div className="d-flex x-center y-center">
          <CommonButton text={"Lend"} containerClass={"middle mr12"} />
          <CommonButton type="type2" text={"Sell"} containerClass={"middle"} />
        </div>
      </div>
    </div>
  </div>
}
