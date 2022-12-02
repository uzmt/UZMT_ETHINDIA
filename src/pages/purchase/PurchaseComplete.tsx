import Main from "assets/img/main-img.png"
import Qr from "assets/img/qr.svg"
import Copy from "assets/img/copy.svg"
import Logo from "assets/img/logo-w.svg"
import { Header } from "components/common/Header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CommonButton } from "components/common/CommonButton"

export const PurchaseComplete = () => {

  const [showQr, setShowQr] = useState(false)
  const navigate = useNavigate()

  return <div className="app main">
    <Header title={"Purchase Complete"} />
    <div className="content no-bottom purchase">
      <div className="complete-img mb15">
        <img src={Main} alt="main" />
        <div className={`qr-img ${showQr ? "active" : ""}`}>
          <img src={Qr} alt="" />
          <div className="d-flex colum y-center">
            <div className="mb8">
              <img src={Logo} alt="" />
            </div>
            <p>
              Scan the QR Code
            </p>
          </div>
        </div>
      </div>

      <div className="img-detail">
        {showQr ? <div className="top-desc"><div className="copy-container">
          <p>
            Tokenkd31021mdoq301...mdoq301eQ5D
          </p>
          <img src={Copy} alt="" />
        </div> </div> : <div className="top-desc">
          <p className="title">
            Darkness
          </p>

          <div className="author-container">
            <div className="mr24">
              <p className="author dot-icon">
                Yu-Gi-Yn
              </p>
            </div>
            <p className="date date-icon">2022. 11. 31 ~ 2022. 12. 05</p>
          </div>
        </div>
        }


        <div className={`button-button ${showQr ? "x-center" : ""}`}>
          {showQr ?
            <CommonButton text={"Confirm"} onClick={() => setShowQr(!showQr)} containerClass={"middle width112"} />
            :
            <>
              <div className="price-info eth">
                <p className="price-text mr4">0.321</p>
                <p className="price-unit opacity5">ETH</p>
              </div>
              <div className="d-flex x-center y-center">
                <CommonButton text={"QR Code"} onClick={() => setShowQr(!showQr)} containerClass={"middle mr12"} />
                <CommonButton type="type2" text={"Share"} onClick={() => setShowQr(!showQr)} containerClass={"middle"} />
              </div>
            </>
          }
        </div>
      </div>

      <div className="bottom-button">
        <CommonButton type="type2" text="Ticket list" containerClass="flex1 mr8" />
        <CommonButton text="Cofirm" containerClass="flex2" onClick={() => navigate("/home")} />
      </div>
    </div>
  </div>
}
