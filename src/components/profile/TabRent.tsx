import { NftMy } from "./NftMy"
import { RentNft } from "./RentNft"

export const TabRent = () => {

  return <div className="pl16 pr16 mb80">
    <RentNft />
    <RentNft num={2} />
    <RentNft num={3} />
    <RentNft num={4} />
    <RentNft num={5} />
  </div>
}
