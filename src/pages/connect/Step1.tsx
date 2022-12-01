import { WalletItem } from "components/connect/WalletItem"


export const Step1 = () => {

  return <>
    <p className="opacity3 color-black tl">
      Minting Step 01
    </p>
    <h3 className="color-black tl">
      Connect<br />
      your Wallet.
    </h3>

    <div className="wallet-list">
      <div className="line light"></div>
      <div className="inner">
        <p className="title color-black">Wallets</p>
        <p className="opacity3 color-black tl mb12">
          Choose the Wallet.
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
