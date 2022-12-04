import { CommonButton } from "components/common/CommonButton"
import { Header } from "components/common/Header"
import { useState } from "react"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Link } from "react-router-dom"

export const Connect = () => {
  const [step, setStep] = useState(0)

  return <div className="app black">
    <Header title="Offer Rental Item" hasBack />

    <div className="content full">
      <div className="pr24 pl24 pb24">
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}

        {step !== 1 && <CommonButton text="Next" containerClass={"flex1"} onClick={() => setStep(step + 1)} />}
        {step === 1 && <>
          <Link to="/game">
          <CommonButton text="Confirm!" containerClass="flex2" />
          </Link>
        </>}

      </div>


    </div>

  </div>
}
