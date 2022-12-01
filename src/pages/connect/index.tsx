import { CommonButton } from "components/common/CommonButton"
import { Header } from "components/common/Header"
import { useState } from "react"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"

export const Connect = () => {
  const [step, setStep] = useState(0)

  return <div>
    <Header title="Ticket Minting" hasBack theme={"light"} />

    <div className="content full">
      <div className="pr24 pl24">
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}

        {step !== 3 && <CommonButton text="Next" containerClass="flex1" onClick={() => setStep(step + 1)} />}
        {step === 3 && <>
          <CommonButton type="type2" text="Edit" containerClass="flex1 mr8" />
          <CommonButton text="Mint!" containerClass="flex2" />
        </>}

      </div>


    </div>

  </div>
}
