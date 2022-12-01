import { Link, useNavigate } from "react-router-dom"
import User from "assets/img/user.svg"
import NftImg from "assets/img/nft-img.png"
import Eth from "assets/img/eth.svg"

export const TabMint = () => {

  return <>
    <div className="nft-info">
      <div className="nft-img">
        <img src={NftImg} alt="NftImg" />
      </div>

      <div className="img-detail">
        <div className="img-top-info">
          <p className="title">
            Axie #35786
          </p>

          <div className="author-container">
            <div className="mr24">
              <p className="author local-icon">
                Bengaluru
              </p>
            </div>
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

          <div className="">
            <Link to="/detail">
              <div className="price-button">
                <div className="mr0">
                  <img src={Eth} alt="eth" />
                </div>
                <p className="price-text">0.321</p>
                <p className="price-unit">ETH</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="nft-info">
      <div className="nft-img">
        <img src={NftImg} alt="NftImg" />
      </div>

      <div className="img-detail">
        <div className="img-top-info">
          <p className="title">
            Axie #35786
          </p>

          <div className="author-container">
            <div className="mr24">
              <p className="author local-icon">
                Bengaluru
              </p>
            </div>
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

          <div className="">
            <Link to="/detail">
              <div className="price-button">
                <div className="mr0">
                  <img src={Eth} alt="eth" />
                </div>
                <p className="price-text">0.321</p>
                <p className="price-unit">ETH</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  </>
}
