import Platform from 'assets/img/plat.png';
import ETH from 'assets/img/eth.png';
import Calander from 'assets/img/cal.png';

export const IntroCard2 = ({ item }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${item.src})` }}>
      <div className="card-description">
        <div className="card-description-box">
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
                <span>{item.profile_rent} Rent Tickets</span>
              </div>
            </div>
            <div className="price">
              <img src={ETH} alt="" />
              <b>{item.amount} </b>ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
