import Plat from 'assets/img/plat.png';
import NFT1 from 'assets/img/intro/nfts/nft1.png';
import Profile1 from 'assets/img/intro/profile/owner1.png';
import { Link } from 'react-router-dom';

const default_item = {
  id: 1,
  name: 'Axie #35121',
  platform: 'Axie Infinity',
  item_image: NFT1,
  profile_image: Profile1,
  owner_name: 'Salvador',
  rent: 23201,
};

export const IntroCard3 = ({ item = default_item }) => {
  return (
    <div className="nft-card">
      <div className="thumbnail">
        <img src={item.item_image} alt="" />
      </div>
      <div className="card-desc">
        <div className="card-desc-container card-desc-info">
          <h5>{item.name}</h5>
          <p className="desc">
            <img src={Plat} alt="platform" />
            {item.platform}
          </p>
        </div>

        <div className="divider"></div>

        <div className="card-desc-container owner-desc-info">
          <div className="owner-profile">
            <div className="owner-profile-image">
              <img src={item.profile_image} alt="" />
            </div>
            <div className="owner-profile-desc">
              <b>{item.owner_name}</b>
              <p>{item.rent.toLocaleString()} NFTs rented</p>
            </div>
          </div>
          <div className="rent-btn-box">
            <Link to="/">
              <p>Rent</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
