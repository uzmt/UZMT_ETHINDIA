import { CommonButton } from "components/common/CommonButton"
import { Header } from "components/common/Header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"
import { StepEnd } from "./StepEnd"

export const Connect = () => {
  const [step, setStep] = useState(0)
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const nav = useNavigate()
  const back = () => {
    if (step === 0) {
      nav(-1)
    } else {
      setStep(step - 1)
    }
  }
  const next = () => {
    console.log('next')
    setStep(step + 1)
  }

  return <div>
    <Header title="Ticket Minting" backFn={back} theme={"light"} />

    <div className="content full">
      <div className="app pr24 pl24">
        {step === 0 && <Step1 name1={name1} setName1={setName1}
          name2={name2} setName2={setName2} next={next} />}
        {step === 1 && <Step2 back={back} next={next} />}
        {step === 2 && <Step3 next={next} />}
        {step === 3 && <StepEnd />}
      </div>
    </div>
  </div>
}
