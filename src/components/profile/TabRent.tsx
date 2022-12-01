import { NftMy } from "./NftMy"

export const TabRent = () => {

  return <div className="pl16 pr16">
    <div className="list-container">
      <NftMy hasDate />
      <NftMy num={2} hasDate />
      <NftMy num={3} hasDate />
      <NftMy num={4} hasDate />
      <NftMy num={5} hasDate />
    </div>
  </div>
}
