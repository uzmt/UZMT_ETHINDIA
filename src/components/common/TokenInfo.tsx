import Eth from "assets/img/logos_ethereum.svg"

export const TokenInfo = () => {


  return <div className="token-info">
    <div className="token-img">
      <img src={Eth} alt="" />
    </div>

    <div className="">
      <p className="name">
        Etherium
      </p>
      <p className="cnt">
        Wallet Balance: 2.293
      </p>
    </div>
  </div>
}
