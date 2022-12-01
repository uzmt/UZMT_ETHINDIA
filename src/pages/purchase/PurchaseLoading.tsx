import { Header } from "components/common/Header"
import Loading from "assets/img/loading.svg"
import { Link } from "react-router-dom"

export const PurchaseLoading = () => {

  return <div className="app main">
    <Header title={"Purchase"} hasBack />
    <Link to="/purchaseComplete">
      <div className="loading-container">
        <img src={Loading} />
        <h3 className={"loading"}>
          Purchase in <br />
          in progress...
        </h3>
      </div>
    </Link>
  </div>
}
