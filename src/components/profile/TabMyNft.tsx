import { NftMy } from "./NftMy"


export const TabMyNft = () => {
  return <div className="pl16 pr16">
    <div className="list-container">
      <NftMy />
      <NftMy num={2} />
      <NftMy num={3} />
      <NftMy num={4} />
      <NftMy num={5} />
    </div>
  </div>
}
