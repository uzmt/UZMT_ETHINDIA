import { IntroCard3 } from './IntroCard3';
import NFT1 from 'assets/img/intro/nfts/nft1.png';
import NFT2 from 'assets/img/intro/nfts/nft2.png';
import NFT3 from 'assets/img/intro/nfts/nft3.png';
import Game1 from 'assets/img/intro/games/game1.png';
import Profile1 from 'assets/img/intro/profile/owner1.png';
import { Link } from 'react-router-dom';

const default_item = {
  name: 'Mining King',
  nfts: 3214,
  game_image: Game1,
  play_link: '',
  rent_link: '',
  cards: [
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
  ],
};

export const IntroGame = ({ item = default_item }) => {
  return (
    <div className="game-row">
      <div className="game">
        <div className="game-bg">
          <img src={item.game_image} alt="" />
        </div>
        <div className="game-bg-gradient"></div>
        <div className="game-description">
          <div className="game-title">
            <h3>{item.name}</h3>
            <p className="desc">{item.nfts.toLocaleString()} NFTs</p>
          </div>
          <div className="game-btns">
            <Link to="/" className="play-btn">
              <p>Play now</p>
            </Link>
            <Link to="/" className="rent-btn">
              <p>RENT</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="items">
        {item.cards.map((card, index) => (
          <IntroCard3 key={index} item={card} />
        ))}
      </div>
    </div>
  );
};
