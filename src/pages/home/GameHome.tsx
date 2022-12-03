import Logo from 'assets/img/logo-w.svg';
import Arrow from 'assets/img/Arrow_icon.png';
import Whole from 'assets/img/whole_icon.png';
import Avatar from 'assets/img/Avatar_icon.png';
import AxieInfinity from 'assets/img/AxieInfinity.png';
import AxieProfile from 'assets/img/AxieProfile.png';
import ITSBLOC from 'assets/img/ITSBLOC.png';
import ITSBLOCProfile from 'assets/img/ITSBLOC_Profile.png';
import SPLINTERLAND from 'assets/img/SplinterLands.png';
import SPLINTERLANDProfile from 'assets/img/SplinterLands_Profile.png';
import GodsUnchained from 'assets/img/GodsUnchained.png';
import GodsUnchainedProfile from 'assets/img/GodsUnchaind_Profile.png';
import { Link } from 'react-router-dom';
import { GameCard } from 'components/game/GameCard';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { GameSwiper } from './GameSwiper';
import '../../assets/scss/game-temp.scss';

const Games = [
  {
    mainImg: AxieInfinity,
    profileImg: AxieProfile,
    projectTitle: 'Axie Infinity',
    nftNum: '3214',
    to: '/gameDetail',
  },
  {
    mainImg: ITSBLOC,
    profileImg: ITSBLOCProfile,
    projectTitle: 'ITSBLOC',
    nftNum: '3214',
    to: '/gameDetail',
  },
  {
    mainImg: SPLINTERLAND,
    profileImg: SPLINTERLANDProfile,
    projectTitle: 'SplinterLands',
    nftNum: '3214',
    to: '/gameDetail',
  },
  {
    mainImg: GodsUnchained,
    profileImg: GodsUnchainedProfile,
    projectTitle: 'Gods Unchained',
    nftNum: '3214',
    to: '/gameDetail',
  },
];

export const GameHome = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="game-home">
      <div className="app home-tab-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <p className="title no-margin"></p>
        <div className="bell-container">
          {isConnected ? (
            <div>
              <Link to="/profile">
                <img src={Avatar} className="avatar" />
              </Link>
            </div>
          ) : (
            <div className="d-flex row y-center">
              <p className="wallet-connect">Tap to Connect wallet</p>
              <img src={Arrow} />
              <img src={Whole} onClick={() => connect()} />
            </div>
          )}
        </div>
      </div>
      <div className="app game-header-container">
        <h2>
          Lend or borrow
          <br />a game NFT
        </h2>
        <h3>
          Share the revenue
          <br />
          based on fully
          <br />
          <span>
            on-chain
            <br />
            transactions
          </span>
        </h3>

        <div className="game-swiper-container">
          <GameSwiper />
        </div>
      </div>
      <div className="app game-container">
        <div className="all-games">
          <h2 className="mb20">All Games</h2>
          {Games.map((Game) => (
            <GameCard mainImg={Game.mainImg} profileImg={Game.profileImg} projectTitle={Game.projectTitle} nftNum={Game.nftNum} to={Game.to} />
          ))}
        </div>
      </div>
    </div>
  );
};
