import Jakob from 'assets/img/jakob.png';
import Aspen from 'assets/img/aspen.png';
import Roger from 'assets/img/roger.png';

const default_items = [
  {
    profile_image: Jakob,
    name: 'Jakob',
    rent: 23201,
  },
  {
    profile_image: Aspen,
    name: 'Aspen',
    rent: 23201,
  },
  {
    profile_image: Roger,
    name: 'Roger',
    rent: 23201,
  },
];

export const IntroManagers = ({ items = default_items }) => {
  return (
    <div className="managers">
      {items.map((manager, index) => (
        <div className="manager-card">
          <div className="manager-card-profile-image">
            <img src={manager.profile_image} alt="" />
          </div>
          <div className="manager-card-profile-info">
            <h4>{manager.name}</h4>
            <p>{manager.rent.toLocaleString()} NFTs Rented</p>
          </div>
        </div>
      ))}
      {items.map((manager, index) => (
        <div className="manager-card">
          <div className="manager-card-profile-image">
            <img src={manager.profile_image} alt="" />
          </div>
          <div className="manager-card-profile-info">
            <h4>{manager.name}</h4>
            <p>{manager.rent.toLocaleString()} NFTs Rented</p>
          </div>
        </div>
      ))}
    </div>
  );
};
