import Main from "assets/img/main-img.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CommonButton } from "components/common/CommonButton"

export const Step2 = () => {

  const [showQr, setShowQr] = useState(false)
  const navigate = useNavigate()

  return <>
    <div className="mb36">
      <p className="opacity3 color-black tl">
        Lending Step 02
      </p>
      <h3 className="color-black tl">
        Check the <br />
        Lent information.
      </h3>
    </div>

    <div className="mb15">
      <img src={Main} alt="main" />

      <div className="top-desc">
        <p className="title color-black">
          Darkness
        </p>

        <div className="d-flex y-center">
          <div className="mr24">
            <p className="author dot-icon color-black">
              Yu-Gi-Yn
            </p>
          </div>
          <p className="date date-icon color-black">2022. 11. 31 ~ 2022. 12. 05</p>
        </div>
      </div>

      <div className={`button-button`}>
        <div className="price-info eth">
          <p className="price-text color-black mr4">0.321</p>
          <p className="price-unit color-black opacity5">ETH</p>
        </div>
        <div className="d-flex x-center y-center">
          <CommonButton type="type2" text={"Share"} onClick={() => setShowQr(!showQr)} containerClass={"middle"} />
        </div>
      </div>
    </div>

    <div className="d-flex">
      <CommonButton text="Edit" containerClass="flex1 black mr8" />
      <CommonButton text="Rent" containerClass="flex2" onClick={() => navigate("/home")} />
    </div>
  </>
}
