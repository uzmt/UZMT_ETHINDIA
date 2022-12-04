import Slide1 from 'assets/img/slide-step1.png';
import Slide2 from 'assets/img/slide-step2.png';
import Slide3 from 'assets/img/slide-step3.png';
import Slide4 from 'assets/img/slide-step4.png';
import CircleArr from 'assets/img/right-circle-arrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const steps = [
  {
    title: `Choose the game 
    you want`,
    description: `Run the game or rent the items you need for the game`,
    image: Slide1,
    curTitle: `Connect wallet`,
  },
  {
    title: `Select the NFT
    required for the game`,
    description: `NFT rental is available for a period of time and shares revenue generated from the game with the NFT owner.`,
    image: Slide2,
    curTitle: `Uplaod NFT`,
  },
  {
    title: `Check out rental list
    in your profile`,
    description: `You can see the rental list or the page where you can apply for a rental.`,
    image: Slide3,
    curTitle: `Sell Ticket`,
  },
  {
    title: `Shall we enjoy 
    the game now?`,
    description: `You can enjoy the game without any burden of money.`,
    image: Slide4,
    curTitle: `Settlement`,
  },
];

export const IntroSlides = () => {
  const [slideNo, setSlideNo] = useState(0);

  console.log(slideNo);

  return (
    <div className="slides">
      {steps.map((step, index) => (
        <div key={index} className={slideNo % steps.length == index ? 'active slidebox' : 'slidebox'}>
          <div className="slide-image">
            <img src={step.image} alt="" />
          </div>
          <div className="slide-description">
            <div className="slide-info">
              <h3>{step.title}</h3>
              <div className="desc">{step.description}</div>
            </div>
            <div className="slide-controller d-flex y-center">
              <button
                onClick={() => {
                  setSlideNo(index + 1);
                }}
              >
                <img src={CircleArr} alt="" />
              </button>
              <b>
                {index + 1} / {steps.length}
              </b>
              <span>{step.curTitle}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
