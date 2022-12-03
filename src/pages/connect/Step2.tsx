import nft0 from "assets/img/nft0.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CommonButton } from "components/common/CommonButton"

export const Step2 = () => {

  const [showQr, setShowQr] = useState(false)
  const navigate = useNavigate()

  return <>
    <div className="mb36">
      <p className="opacity3 color-white tl">
      Rental Step 01
      </p>
      <h3 className="color-white tl">
        Check the <br />
        Rental information.
      </h3>
    </div>

    <div className="mb15">
      <img src={nft0} alt="main" />

      <div className="top-desc">
        <p className="title color-white">
        Pick AXE
        </p>

        <div className="d-flex y-center">
          <div className="mr24">
            <p className="author dot-icon color-white">
              70:30 Revenue Share
            </p>
          </div>
          <p className="date date-icon color-white">12 days</p>
        </div>
      </div>

      <div className={`button-button`}>
        <div className="d-flex x-center y-center">
          <CommonButton type="type2" text={"Share"} onClick={() => setShowQr(!showQr)} containerClass={"middle"} />
        </div>
      </div>
    </div>

    <div className="d-flex">
      <CommonButton text="Edit" type="type2" containerClass="flex1 white mb15" />
    </div>
  </>
}
