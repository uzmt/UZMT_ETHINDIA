import Eth from "assets/img/eth-b.svg"
import Nft1 from "assets/img/nft1.png"
import Nft2 from "assets/img/nft2.png"
import Nft3 from "assets/img/nft3.png"
import Nft4 from "assets/img/nft4.png"
import Nft5 from "assets/img/nft5.png"

export const NftMy = ({ num, hasDate }: { num?: number, hasDate?: boolean }) => {
  let nft = Nft1
  if (num === 2) nft = Nft2
  if (num === 3) nft = Nft3
  if (num === 4) nft = Nft4
  if (num === 5) nft = Nft5

  return <div className="nft-item">
    <div className="mb4">
      <img src={nft} alt="" />
    </div>
    <p className="nft-name bold mb5">CloneX #5083</p>
    {hasDate ? <p className="date-icon mb5">2022. 11. 31 ~ 2022. 12. 05</p> : <></>}
    <div className="price">
      <div className="mr5">
        <img src={Eth} alt="" />
      </div>
      <p className="price-text mr2">0.321</p>
      <p className="price-unit">ETH</p>
    </div>
  </div>
}
