import Logo from 'assets/img/logo-w.svg';
import Arrow from 'assets/img/Arrow_icon.png';
import Whole from 'assets/img/whole_icon.png';
import Avatar from 'assets/img/Avatar_icon.png';
import AxieInfinity from 'assets/img/miner.png';
import AxieProfile from 'assets/img/minor_icon.png';
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
import { useState, useEffect } from "react"
import ABI from '../../utils/abi.json'
import {client, getProfiles, recommendProfiles} from '../../utils/api';
import {id} from '../../utils/id';
const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";

const Games = [
  {
    mainImg: AxieInfinity,
    profileImg: AxieProfile,
    projectTitle: 'MINER',
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
  const [profile, setProfile] = useState()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (id) {
        fetchProfile()
    }

}, [id])

  async function fetchProfile() {
    try {
        
        const response = await client.query(getProfiles, { id }).toPromise()
        
        setProfile(response.data.profiles.items[0]);

    } catch (err) {
        console.log(err);
    }
  }

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
                {
                  profile ? (
                    <Link to="/profile">
                    <img src={profile.picture.original.url} className="avatar"/>
                  </Link>
                  ):(
                    <div style={{ width: "200px", height: "200px", backgroundColor: 'black' }} />
                  )
                }
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
