import Loading from "assets/img/loading.svg"
import { Link } from "react-router-dom"

export const Step3 = ({ next }: { next: () => void }) => {

  return <>
    <div className="loading-container" onClick={next}>
      <img src={Loading} />
      <h3 className={"loading color-black"}>
        Purchase in <br />
        in progress...
      </h3>
    </div>
  </>
}
