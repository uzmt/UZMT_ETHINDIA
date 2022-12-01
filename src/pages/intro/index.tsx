import IntroText from "assets/img/intro-text.svg"
import Logo from "assets/img/logo.svg"
import Menu from "assets/img/menu.svg"
import { LaunchButton } from "components/common/LaunchButton"
import { Link } from "react-router-dom"

export const Intro = () => {
  return <>
    <div className="intro">
      <div className="intro-header-container">
        <div className="intro-header">
          <h1>
            <img src={Logo} alt="logo" />
          </h1>
          <div className="d-flex y-center">
            <LaunchButton containerStyle={"mr15"} />
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>
      <div className="intro-text-container">
        <div className="mb68">
          <img src={IntroText} alt="introText" />
        </div>
        <div className="pl24">
          <h4 className="pl12 mb18">
            UZUMETA Lorem Ipsum,<br />
            Equel taure. dio se metios.<br />
            Wanna Experience?<br />
            Take this, And Claim That.
          </h4>

          <div className="width-170">
            <LaunchButton containerStyle={"mb8"} type={"type2"} />
            <Link to="/game">
              <div className="connect-button">
                <p>
                  Connect wallet
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="">
      <h2>
        Here. This is<br />
        UZUMETA.
      </h2>

      <div className="desc">
        UZUMETA Lorem Ipsum, Equel taure. dio se metios. Wanna Experience? Take this, And Claim That.
      </div>


    </div>

  </>
}
