import Game1 from 'assets/img/intro/games/game1.png';
import GameSymbol1 from 'assets/img/intro/game_symbols/game1.png';
import { Link } from 'react-router-dom';

const default_item = {
  description: 'Let’s be the king of mining!',
  platform: 'Mining King',
  nfts: 3214,
  game_image: Game1,
  play_link: '',
  rent_link: '',
  game_symbol: GameSymbol1,
};

export const IntroGame2 = ({ item = default_item }) => {
  return (
    <div className="game2-row">
      <div className="game">
        <div className="game-info">
          <div className="game-bg">
            <img src={item.game_image} alt="" />
          </div>
          <div className="game-bg-gradient"></div>
          <div className="game-title">
            <p className="desc">{item.description}</p>
            <h3>{item.platform}</h3>
          </div>
        </div>
        <div className="game-description">
          <div className="game-description-info">
            <div className="game-symbol">
              <img src={item.game_symbol} alt="" />
            </div>
            <div className="game-title">
              <h3>{item.platform}</h3>
              <p>{item.nfts.toLocaleString()} NFTs</p>
            </div>
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
    </div>
  );
};
