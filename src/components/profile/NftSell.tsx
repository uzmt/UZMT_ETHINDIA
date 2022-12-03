import Eth from "assets/img/eth-b.svg"
import nft0 from "assets/img/nft0.png"
import Nft2 from "assets/img/nft2.png"
import Nft3 from "assets/img/nft3.png"
import Nft4 from "assets/img/nft4.png"
import Nft5 from "assets/img/nft5.png"
import { CommonButton } from "components/common/CommonButton"
import { Link } from "react-router-dom"

export const NftCell = ({ num }: { num?: number }) => {
  let nft = nft0
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
        </div>
        <div className="d-flex x-center y-center">
          <Link to="/connect">
          <CommonButton text={"Make Rental"} containerClass={"middle mr12"} />
          </Link>
        </div>
      </div>

    </div>
  </div>
}
