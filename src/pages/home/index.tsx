import { BottomTab } from "components/common/BottomTab"
import { HomeTab } from "components/home/HomeTab"
import User from "assets/img/user.svg"
import { Link } from "react-router-dom"
import Main from "assets/img/main-img.png"

export const Home = () => {
  return <div className="app main">
    <HomeTab />
    <div className="content full black pb80">
      <div className="pr24 pl24">
        <div className="nft">
          <div className="tc">
            <img src={Main} alt="" />
          </div>
          <div className="img-detail small">
            <div className="img-top-info">
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

            <div className="img-bottom-info">
              <div className="profile-container mr23">
                <div className="user-profile">
                  <img src={User} alt="user-icon" />
                </div>

                <div className="user-detail">
                  <p className="name">Salvador Dali</p>
                  <p className="cnt">23,201 Rent Tickets</p>
                </div>
              </div>

              <Link to="/detail">
                <div className="price-button eth">
                  <p className="price-text">0.321</p>
                  <p className="price-unit">ETH</p>
                </div>
              </Link>

            </div>
          </div>
        </div>

        <div className="nft">
          <div className="tc">
            <img src={Main} alt="" />
          </div>
          <div className="img-detail small">
            <div className="img-top-info">
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

            <div className="img-bottom-info">
              <div className="profile-container mr23">
                <div className="user-profile">
                  <img src={User} alt="user-icon" />
                </div>

                <div className="user-detail">
                  <p className="name">Salvador Dali</p>
                  <p className="cnt">23,201 Rent Tickets</p>
                </div>
              </div>

              <Link to="/detail">
                <div className="price-button eth">
                  <p className="price-text">0.321</p>
                  <p className="price-unit">ETH</p>
                </div>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
    <BottomTab />
  </div>
}
