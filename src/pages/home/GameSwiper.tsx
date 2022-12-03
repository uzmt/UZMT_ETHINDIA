import Icon1 from 'assets/img/game/game-icons/1.png';
import Icon2 from 'assets/img/game/game-icons/2.png';
import Icon3 from 'assets/img/game/game-icons/3.png';
import Icon4 from 'assets/img/game/game-icons/4.png';
import Icon5 from 'assets/img/game/game-icons/5.png';
import Icon6 from 'assets/img/game/game-icons/6.png';
import Icon7 from 'assets/img/game/game-icons/7.png';
import Icon8 from 'assets/img/game/game-icons/8.png';
import Icon9 from 'assets/img/game/game-icons/9.png';
import Icon10 from 'assets/img/game/game-icons/10.png';
import { useEffect, useState } from 'react';
const GameIcons = [
  { image: Icon1 },
  { image: Icon2 },
  { image: Icon3 },
  { image: Icon4 },
  { image: Icon5 },
  { image: Icon6 },
  { image: Icon7 },
  { image: Icon8 },
  { image: Icon9 },
  { image: Icon10 },
  { image: Icon1 },
  { image: Icon2 },
  { image: Icon3 },
  { image: Icon4 },
  { image: Icon5 },
  { image: Icon6 },
  { image: Icon7 },
  { image: Icon8 },
  { image: Icon9 },
  { image: Icon10 },
];

export const GameSwiper = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log('1');
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="swiper-wrap">
      <div className="swiper-view-wrap">
        <div className="swiper-view">
          {GameIcons.map((icon, index) => (
            <div className="game-icon" key={index}>
              <img src={icon.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
