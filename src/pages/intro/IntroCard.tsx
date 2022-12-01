import Platform from 'assets/img/plat_b.png';
import ETH from 'assets/img/eth.png';
import Calander from 'assets/img/cal_b.png';

export const IntroCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.src} alt="" />
      </div>
      <div className="card-description">
        <div className="card-description-info">
          <h3>{item.title}</h3>
          <div className="card-description-info-wrap">
            <span>
              <img src={Platform} alt="" />
              <b>{item.platform}</b>
            </span>
            <span>
              <img src={Calander} alt="" />
              {item.date}
            </span>
          </div>
        </div>

        <div className="card-divider"></div>

        <div className="owner-info">
          <div className="profile">
            <div className="profile-image">
              <img src={item.profile_image} alt="" />
            </div>
            <div className="profile-info">
              <b>{item.profile_name}</b>
              {item.profile_rent} Rent Tickets
            </div>
          </div>
          <div className="price">
            <img src={ETH} alt="" />
            <b>{item.amount} </b>ETH
          </div>
        </div>
      </div>
    </div>
  );
};
