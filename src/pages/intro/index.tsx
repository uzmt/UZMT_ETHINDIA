import IntroText from 'assets/img/intro-text.png';
import UZUMETA1 from 'assets/img/uzumeta1.png';
import UZUMETA2 from 'assets/img/uzumeta2.png';
import UZUMETA3 from 'assets/img/uzumeta3.png';
import UZUMETA4 from 'assets/img/uzumeta4.png';
import Profile from 'assets/img/profile.png';
import Profile2 from 'assets/img/profile2.png';
import CARD1 from 'assets/img/card1.png';
import CARD2 from 'assets/img/card2.png';
import CARD3 from 'assets/img/card3.png';
import IntroFloating1 from 'assets/img/intro_floating1.png';
import IntroFloating2 from 'assets/img/intro_floating2.png';
import IntroFloating3 from 'assets/img/intro_floating3.png';
import Logo from 'assets/img/logo.svg';
import LogoW from 'assets/img/logo_w.svg';
import { LaunchButton } from 'components/common/LaunchButton';
import { Link } from 'react-router-dom';
import { IntroCard } from './IntroCard';
import { IntroSlides } from './IntroSlides';
import '../../assets/scss/intro-temp.scss';
import { IntroCard2 } from './IntroCard2';
import ArrB from 'assets/img/arrow-right-black.svg';
import { IntroManagers } from './IntroManagers';

const items = [
  {
    src: UZUMETA1,
    title: 'Darkness',
    platform: 'Yu-Gi-Yn',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile,
    profile_name: 'Mariey Stanton',
    profile_rent: 23201,
    amount: 0.521,
  },
  {
    src: UZUMETA2,
    title: 'Rent my Axies',
    platform: 'AXIE Infinity',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile,
    profile_name: 'Chance Mango',
    profile_rent: 23201,
    amount: 0.521,
  },
  {
    src: UZUMETA3,
    title: 'It\'s over 9000',
    platform: 'Decentraland Wearables',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile,
    profile_name: 'Marilyn Curtis',
    profile_rent: 23201,
    amount: 0.521,
  },
  {
    src: UZUMETA4,
    title: 'Darkness',
    platform: 'Sandbox',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile,
    profile_name: 'Alfonso Bergson',
    profile_rent: 23201,
    amount: 0.521,
  },
];

const items2 = [
  {
    src: CARD1,
    title: 'Darkness',
    platform: 'Yu-Gi-Yn',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile2,
    profile_name: 'Adison Saris',
    profile_rent: 23201,
    amount: 0.521,
  },
  {
    src: CARD2,
    title: 'My Axie...is angry!',
    platform: 'Axie Infinity',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile2,
    profile_name: 'Terry Westervelt',
    profile_rent: 23201,
    amount: 0.521,
  },
  {
    src: CARD3,
    title: 'SuperLens',
    platform: 'Decentraland Wearables',
    date: '2022.11.31 ~ 2022.12.05',
    profile_image: Profile2,
    profile_name: 'Adison Philips',
    profile_rent: 23201,
    amount: 0.521,
  },
];

const menus = [
  {
    link: '',
    name: 'Overview',
  },
  {
    link: '',
    name: 'Service',
  },
  {
    link: '',
    name: 'Best Sellers',
  },
  {
    link: '',
    name: 'Top 3 Ticket',
  },
];

export const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="intro-header-container">
          <div className="intro-header">
            <h1>
              <img src={Logo} alt="logo" />
            </h1>
            <div className="d-flex y-center menus">
              {menus.map((menu, index) => {
                return (
                  <div key={index}>
                    <Link to={menu.link}>
                      <p>{menu.name}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="d-flex y-center">
              <LaunchButton containerStyle={'mr15'} />
            </div>
          </div>
        </div>

        <div className="intro-text-container">
          <img src={IntroText} alt="intro-text" />
        </div>

        <div className="intro-description-container">
          <p>
            Web3 Game is a new trend for
            <br />
            making passive income
            <br />
            Wanna Experience?
            <br />
            Take this And Rent That.
          </p>

          <div className="d-flex y-center LaunchButton">
            <LaunchButton />
          </div>
        </div>

        <div className="floating-container">
          <img src={IntroFloating1} alt="" />
          <img src={IntroFloating2} alt="" />
          <img src={IntroFloating3} alt="" />
        </div>
      </div>

      <div className="intro-uzumeta">
        <h2>
          Here. This is
          <br />
          UZUMETA.
        </h2>

        <div className="desc">
          UZUMETA is a rental platform for the scholarship
          <br />
          program of web3 games. We help users start web3
          <br />
          games much more easily.
        </div>

        <div className="d-grid">
          {items.map((item, index) => (
            <IntroCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="experience">
        <h2>
          Experience
          <br />
          Web3 Game
        </h2>
        <div className="desc">
          Just follow 4 steps to rent NFTs to play the web3 games.
          <br />
          Simple and Easy.
        </div>

        <div className="slidebox-container">
          <IntroSlides />
        </div>
      </div>

      <div className="rent">
        <div className="rent-container">
          <h2>Start Rent Today</h2>
          <div className="desc">
            <div className='point point1'></div>
            <div className='point point2'></div>
            <div className='point point3'></div>
            <div className='point point4'></div>
            <div className='point point5'></div>
            <div className='point point6'></div>
            In some countries, it was so expensive to start web3 games. However, our
            <br />
            rental protocol breaks the obstacles to play and earn! Just Play It after
            <br />
            renting NFTs for free!
          </div>
          <div className="LaunchButton">
            <LaunchButton containerStyle={'mr15'} />
          </div>
        </div>
      </div>

      <div className="top3">
        <div className="top3-container">
          <h2>
            <b>Top3</b> Rent Tickets
          </h2>
          <div className="desc">
            Weekly Top3 Rent Items UZUMETA selects weekly top3 rent items for you!
            <br />
            Take this, And Play the game 🤩
          </div>

          <div className="cardbox">
            {items2.map((item, index) => (
              <IntroCard2 key={index} item={item} />
            ))}
          </div>

          <div className="more-btn">
            <Link to="/" className={`more-button`}>
              <p>More Items</p>
              <img src={ArrB} alt="star" />
            </Link>
            <p>There are a lot of items you want!</p>
          </div>
        </div>
      </div>

      <div className="best">
        <div className="best-container">
          <h2>
            <span>Best</span> Managers
          </h2>
          <div className="desc">
            Do you want to work together with a great manager?
            <br />
            UZUMETA is the perfect place to find your partner!
          </div>

          <div className="flow-managers">
            <IntroManagers />
            <IntroManagers />
            <IntroManagers />
          </div>
        </div>
      </div>

      <div className="intro-footer">
        <div className="intro-footer-container">
          <div className="intro-footer-info">
            <h1>
              <img src={LogoW} alt="logo" />
            </h1>
            <div className="d-flex y-top menus">
              {menus.map((menu, index) => {
                return (
                  <div key={index}>
                    <Link to={menu.link}>
                      <p>{menu.name}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex x-end y-center LaunchButton">
            <LaunchButton />
          </div>
          <div className="d-flex x-end copyright">
            <p>© 2022, Designed by UZUMETA — All right Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
