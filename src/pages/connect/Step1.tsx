import { WalletItem } from "components/connect/WalletItem"
import MintImg from "assets/img/mint-img.png"

export const Step1 = () => {

  return <>
    <div className="mb36">
      <p className="opacity3 color-black tl">
        Minting Step 01
      </p>
      <h3 className="color-black tl">
        Lists<br />
        your NFT Rent
      </h3>
    </div>

    <div className="mint-item">
      <img src={MintImg} alt="" />
      <div className="mint-info"></div>
    </div>



    <div className="wallet-list mb70">
      <div className="line light"></div>
      <div className="pt24 pb24">
        <p className="title color-black no-margin">Rent Period</p>
        <p className="opacity3 color-black tl mb12">
          Please set rent period
        </p>

        <div className="wallet-item-container">
          <WalletItem checked />
          <WalletItem />
          <WalletItem />
          <WalletItem />
          <WalletItem />
        </div>
      </div>
      <div className="line light"></div>
    </div>
  </>
}
