import Check from "assets/img/circle-check.svg"
import { useState } from "react"
import Metamask from "assets/img/meta-mask.svg"

export const WalletItem = ({ checked }: { checked?: boolean }) => {

  const [check, setCheck] = useState(checked)

  return <div className="wallet-item">
    <div className="d-flex y-center">
      <div className="mr12">
        <img src={Metamask} alt="" />
      </div>
      <h4 className="color-black">
        Metamask
      </h4>
    </div>

    <div className="" onClick={() => setCheck(!check)}>
      {check ? <img src={Check} alt="" /> : <div className="check-circle"></div>}
    </div>
  </div>
}
