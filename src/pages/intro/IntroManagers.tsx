import Jakob from 'assets/img/jakob.png';
import Aspen from 'assets/img/aspen.png';
import Roger from 'assets/img/roger.png';

const managers = [
  {
    profile_image : Jakob,
    name: 'Jakob',
    rent: 23201,
  },
  {
    profile_image : Aspen,
    name: 'Aspen',
    rent: 23201,
  },
  {
    profile_image : Roger,
    name: 'Roger',
    rent: 23201,
  },
  {
    profile_image : Jakob,
    name: 'Jakob',
    rent: 23201,
  },
  {
    profile_image : Aspen,
    name: 'Aspen',
    rent: 23201,
  },
  {
    profile_image : Roger,
    name: 'Roger',
    rent: 23201,
  }
]

export const IntroManagers = () => {
  return <div className="managers">
    {managers.map((manager,index) => <div className="manager-card">
      <div className="manager-card-profile-image">
        <img src={manager.profile_image} alt="" />
      </div>
      <div className="manager-card-profile-info">
        <h4>{manager.name}</h4>
        <p>{manager.rent} Rent Tickets</p>
      </div>
    </div>)}
  </div>
}