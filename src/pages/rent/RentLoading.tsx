import { Header } from "components/common/Header"
import Loading from "assets/img/loading.svg"
import { Link } from "react-router-dom"

export const RentLoading = () => {

  return <div className="app main">
    <Header title={"Rental"} hasBack />
    <Link to="/rentComplete">
      <div className="loading-container">
        <img src={Loading} />
        <h3 className={"loading"}>
          Rental is <br />
          in progress...
        </h3>
      </div>
    </Link>
  </div>
}
