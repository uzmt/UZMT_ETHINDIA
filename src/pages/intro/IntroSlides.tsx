import Slide1 from 'assets/img/slide-step1.png';
import Slide2 from 'assets/img/slide-step2.png';
import Slide3 from 'assets/img/slide-step3.png';
import Slide4 from 'assets/img/slide-step4.png';
import CircleArr from 'assets/img/right-circle-arrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const steps = [
  {
    title: `Connect your
    Wallet.`,
    description: `Connect a wallet with NFT to mint. UZUMETA supports several wallets.`,
    image: Slide1,
    curTitle: `Connect wallet`,
  },
  {
    title: `Upload your 
    NFT Rent Ticket.`,
    description: `Connect a wallet with NFT to mint. UZUMETA supports several wallets.`,
    image: Slide2,
    curTitle: `Uplaod NFT`,
  },
  {
    title: `Sell your NFT
    Rent Ticket.`,
    description: `Connect a wallet with NFT to mint. UZUMETA supports several wallets.`,
    image: Slide3,
    curTitle: `Sell Ticket`,
  },
  {
    title: `Settlement your
    Ticket price.`,
    description: `Connect a wallet with NFT to mint. UZUMETA supports several wallets.`,
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
