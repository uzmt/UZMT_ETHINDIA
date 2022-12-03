import IntroText from 'assets/img/intro-text.png';
import NFT1 from 'assets/img/intro/nfts/nft1.png';
import NFT2 from 'assets/img/intro/nfts/nft2.png';
import NFT3 from 'assets/img/intro/nfts/nft3.png';
import NFT4 from 'assets/img/intro/nfts/nft4.png';
import NFT5 from 'assets/img/intro/nfts/nft5.png';
import NFT6 from 'assets/img/intro/nfts/nft6.png';
import NFT7 from 'assets/img/intro/nfts/nft7.png';
import NFT8 from 'assets/img/intro/nfts/nft8.png';
import NFT9 from 'assets/img/intro/nfts/nft9.png';
import Profile1 from 'assets/img/intro/profile/owner1.png';
import Game1 from 'assets/img/intro/games/game1.png';
import Game2 from 'assets/img/intro/games/game2.png';
import Game3 from 'assets/img/intro/games/game3.png';
import GameSymbol1 from 'assets/img/intro/game_symbols/game1.png';
import GameSymbol2 from 'assets/img/intro/game_symbols/game2.png';
import GameSymbol3 from 'assets/img/intro/game_symbols/game3.png';
import Logo from 'assets/img/logo.svg';
import LogoW from 'assets/img/logo_w.svg';
import { LaunchButton } from 'components/common/LaunchButton';
import { Link } from 'react-router-dom';
import { IntroSlides } from './IntroSlides';
import '../../assets/scss/intro-temp.scss';
import ArrB from 'assets/img/arrow-right-black.svg';
import { IntroManagers } from './IntroManagers';
import { IntroGame } from './IntroGame';
import { IntroCard3 } from './IntroCard3';
import { IntroGame2 } from './IntroGame2';

const nftCards = [
  {
    id: 1,
    name: 'Axie #35121',
    platform: 'Axie Infinity',
    item_image: NFT1,
    profile_image: Profile1,
    owner_name: 'Salvador',
    rent: 23201,
  },
  {
    id: 2,
    name: 'ITSB #23144',
    platform: 'ITSBLOC',
    item_image: NFT2,
    profile_image: Profile1,
    owner_name: 'Salvador',
    rent: 23201,
  },
  {
    id: 3,
    name: 'king #59153',
    platform: 'Mining King',
    item_image: NFT3,
    profile_image: Profile1,
    owner_name: 'Salvador',
    rent: 23201,
  },
  {
    id: 4,
    name: 'king #12112',
    platform: 'Mining King',
    item_image: NFT4,
    profile_image: Profile1,
    owner_name: 'Salvador',
    rent: 23201,
  },
];

const games = [
  {
    name: 'Mining King',
    nfts: 3214,
    game_image: Game1,
    play_link: '',
    rent_link: '',
    cards: [
      {
        id: 1,
        name: 'king #59153',
        platform: 'Mining King',
        item_image: NFT3,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 2,
        name: 'king #12112',
        platform: 'Mining King',
        item_image: NFT4,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 3,
        name: 'king #59153',
        platform: 'Mining King',
        item_image: NFT5,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
    ],
  },
  {
    name: 'ITSBLOC',
    nfts: 3214,
    game_image: Game2,
    play_link: '',
    rent_link: '',
    cards: [
      {
        id: 1,
        name: 'ITSB #23144',
        platform: 'ITSBLOC',
        item_image: NFT6,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 2,
        name: 'ITSB #23144',
        platform: 'ITSBLOC',
        item_image: NFT2,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 3,
        name: 'ITSB #59153',
        platform: 'ITSBLOC',
        item_image: NFT7,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
    ],
  },
  {
    name: 'Axie Infinity',
    nfts: 3214,
    game_image: Game3,
    play_link: '',
    rent_link: '',
    cards: [
      {
        id: 1,
        name: 'Axie #35786',
        platform: 'Axie Infinity',
        item_image: NFT8,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 2,
        name: 'Axie #35781',
        platform: 'Axie Infinity',
        item_image: NFT9,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
      {
        id: 3,
        name: 'Axie #35121',
        platform: 'Axie Infinity',
        item_image: NFT1,
        profile_image: Profile1,
        owner_name: 'Salvador',
        rent: 23201,
      },
    ],
  },
];

const games2 = [
  {
    description: 'Let’s be the king of mining!',
    platform: 'Mining King',
    nfts: 3214,
    game_image: Game1,
    play_link: '',
    rent_link: '',
    game_symbol: GameSymbol1,
  },
  {
    description: 'Break from the popular CVC contests.',
    platform: 'ITSBLOC',
    nfts: 3214,
    game_image: Game2,
    play_link: '',
    rent_link: '',
    game_symbol: GameSymbol2,
  },
  {
    description: 'Adventure, Arena Battle, and Breeding.',
    platform: 'Axie Infinity',
    nfts: 3214,
    game_image: Game3,
    play_link: '',
    rent_link: '',
    game_symbol: GameSymbol3,
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

        <div className="intro-head-cards">
          {nftCards.map((nftCard, index) => (
            <IntroCard3 key={index} item={nftCard} />
          ))}
        </div>
      </div>

      <div className="intro-uzumeta">
        <h2>
          NFT Rental Platform
          <br />
          UZUMETA
        </h2>

        <div className="desc">
          Playing games on the blockchain can be profitable, but often requires significant upfront
          <br />
          investment. UZMT is a GameFi platform where scholarship programs and lending
          <br />
          mechanisms are very easy and useful.
        </div>
      </div>
      <div className="uzumeta-cards">
        <div className="games">
          {games.map((game, index) => (
            <IntroGame item={game} />
          ))}
        </div>
      </div>

      <div className="experience">
        <h2>
          Try a game without buying a NFT
          <br />
          with easy and simple steps
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
            <div className="point point1"></div>
            <div className="point point2"></div>
            <div className="point point3"></div>
            <div className="point point4"></div>
            <div className="point point5"></div>
            <div className="point point6"></div>
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
            <b>Top3</b> GAME
          </h2>
          <div className="desc">
            Weekly Top3 Rent Items UZUMETA selects weekly top3 rent items for you!
            <br />
            Take this, And Play the game 🤩
          </div>

          <div className="top3-cards">
            {games2.map((game, index) => (
              <IntroGame2 key={index} item={game} />
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
            <span>Best</span> Lender
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
