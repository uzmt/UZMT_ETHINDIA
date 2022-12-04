import nft0 from "assets/img/nft0.png"
import Qr from "assets/img/qr.svg"
import Copy from "assets/img/copy.svg"
import Logo from "assets/img/logo-w.svg"
import { Header } from "components/common/Header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CommonButton } from "components/common/CommonButton"



export const RentComplete = () => {

  const [showQr, setShowQr] = useState(false)
  const navigate = useNavigate()

  return <div className="app main">
    <Header title={"Rental Complete"} />
    <div className="content no-bottom purchase">
      <div className="complete-img mb15">
        <img src={nft0} alt="main" />
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
          Pick AXE
          </p>

          <div className="author-container">
            <div className="mr24">
              <p className="author dot-icon">
                30:70 Revenue Share
              </p>
            </div>
            <p className="date date-icon">2022. 12. 5 ~ 2022. 12. 17</p>
          </div>
        </div>
        }


        <div className={`button-button ${showQr ? "x-center" : ""}`}>
          {showQr ?
            <CommonButton text={"Confirm"} onClick={() => setShowQr(!showQr)} containerClass={"middle width112"} />
            :
            <>
              <div className="d-flex x-center y-center cursor-click">
                <CommonButton type="type2" text={"Share"} onClick={() => setShowQr(!showQr)} containerClass={"middle"} />
              </div>
            </>
          }
        </div>
      </div>

      <div className="bottom-button">
        <CommonButton type="type2" text="Check in Profile" containerClass="flex1 mr8" onClick={() => navigate("/profile")}/>
        <CommonButton text="Cofirm" containerClass="flex2" onClick={() => navigate("/game")}/>
      </div>
    </div>
  </div>
}
