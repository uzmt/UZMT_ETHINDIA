import { Header } from "components/common/Header"
import PurchaseImg from "assets/img/purchase-img.png"
import { TokenInfo } from "components/common/TokenInfo"
import { BuyButton } from "components/common/BuyButton"
import { Link, useNavigate } from "react-router-dom"

export const Purchase = () => {

  const navigate = useNavigate()

  return <div className="app main">
    <Header title={"Purchase"} hasBack />
    <div className="content no-bottom">

      <div className="purchase-info mb20">
        <div className="purchase-img">
          <img src={PurchaseImg} alt="PurchaseImg" />
        </div>
        <div>
          <p className="title">
            Darkness
          </p>

          <div>
            <p className="author dot-icon">
              Yu-Gi-Yn
            </p>
            <p className="date date-icon">2022. 11. 31 ~ 2022. 12. 05</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="purchase-method">
        <h3 className="title">
          Purchase Method
        </h3>
        <h4 className="desc mb12">
          Choose the <span className="bold">Token</span>.
        </h4>

        <div className="token-list-container">
          <TokenInfo />
          <TokenInfo />
          <TokenInfo />
          <TokenInfo />
          <TokenInfo />
        </div>
      </div>

      <div className="line"></div>

      <div className="purchase-detail">
        <h3 className="title">
          Purchase Detail
        </h3>
        <h4 className="desc mb12">
          <span className="bold">Transaction Fee</span> and etc.
        </h4>

        <div className="price-line">
          <div className="price-container">
            <p className="price-text mr4">0.300</p>
            <p className="price-unit opacity5 mr8">ETH</p>
            <p className="price-desc">1 Ticket prices </p>
          </div>
        </div>

        <div className="price-line">
          <div className="price-container pt4 mb4">
            <p className="price-text mr4">+0.020</p>
            <p className="price-unit opacity5 mr8">ETH</p>
            <p className="price-desc">Platform fee </p>
          </div>

          <div className="price-container">
            <p className="price-text mr4">+0.001</p>
            <p className="price-unit opacity5 mr8">ETH</p>
            <p className="price-desc">Transaction fee</p>
          </div>
        </div>

        <div className="total-container">
          <p className="total-text">Total Price</p>
          <div className="total-price eth mt4">
            <p className="price-text big mr4">0.321</p>
            <p className="price-unit big">ETH</p>
          </div>
        </div>
      </div>

      <div className="bottom-button" onClick={() => navigate("/purchaseLoading")}>
        <div className="buy-button w-per-100">
          <p className="left-buy-text">
            Buy Rent ticket
          </p>
          <div className="right-buy-text eth">
            <p className="price-text big">0.321</p>
            <p className="price-unit big">ETH</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
