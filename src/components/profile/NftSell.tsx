import Eth from "assets/img/eth-b.svg"
import Nft1 from "assets/img/nft1.png"
import Nft2 from "assets/img/nft2.png"
import Nft3 from "assets/img/nft3.png"
import Nft4 from "assets/img/nft4.png"
import Nft5 from "assets/img/nft5.png"
import { CommonButton } from "components/common/CommonButton"

export const NftCell = ({ num }: { num?: number }) => {
  let nft = Nft1
  if (num === 2) nft = Nft2
  if (num === 3) nft = Nft3
  if (num === 4) nft = Nft4
  if (num === 5) nft = Nft5
  return <div className="nft-item full">
    <div className="mb4">
      <img src={nft} alt="" />
    </div>
    <div className="img-detail full">
      <div className="top-desc light">
        <p className="title ">
          Darkness
        </p>

        <div className="author-container">
          <div className="mr24">
            <p className="author dot-icon ">
              Yu-Gi-Yn
            </p>
          </div>
          <p className="date date-icon">2022. 11. 31 ~ 2022. 12. 05</p>
        </div>
      </div>

      <div className="d-flex x-eq">
        <div className="price-info">
          <div className="mr4">
            <img src={Eth} alt="" />
          </div>
          <p className="price-text mr4 ">0.321</p>
          <p className="price-unit opacity5 ">ETH</p>
        </div>
        <div className="d-flex x-center y-center">
          <CommonButton text={"RENT"} containerClass={"middle mr12"} />
          <CommonButton type="type3" text={"NFT SELL"} containerClass={"middle"} />
        </div>
      </div>

    </div>
  </div>
}
