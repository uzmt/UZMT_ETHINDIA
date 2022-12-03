import CalOut from "assets/img/cal-out.svg"
import Dot from "assets/img/dot.svg"
import ProjectImg from "assets/img/detail-img.png"
import { CommonButton } from "components/common/CommonButton"


export const NftTabDetail = () => {
  return <>
    <div className="mb24">
      <p className="content-title mb12">
        Project
      </p>
      <div className="over-view">
        <div className="d-flex y-center has-arr mb20">
          <div className="dot-big">
            <img src={Dot} alt="" />
          </div>
          <div>
            <p className="content-title">
              MINER
            </p>
            <p>
              NFT
            </p>
          </div>
        </div>
        <div className="project-banner x-center">
        <img  src={ProjectImg} alt="" />
        </div>
      </div>
    </div>

    <div className="mb24">
      <p className="content-title mb12">
        Rental period
      </p>

      <div className="rental-box x-eq mb12">
        <div className="d-flex y-center">
          <div className="mr10">
            <img src={CalOut} alt="" />
          </div>
          <div>
            <p className="content-title">
              Until 2022. 12. 17
            </p>
          </div>
        </div>
        <p>
          AM 12:00 (UTC+5:30)
        </p>

      </div>
    </div>

    <div className="">
      <p className="content-title mb12">
        Properties
      </p>

      <div className="properties-box-container">
        <div className="properties-box">
          <div className="mb8">
            <p className="content-title">Move</p>
          </div>
          <div className="mb8">
            <CommonButton text="Aquastock" containerClass="middle" />
          </div>
          <div className="opacity3">
            <p>3% have this trait</p>
          </div>
        </div>

        <div className="properties-box">
          <div className="mb8">
            <p className="content-title">Move</p>
          </div>
          <div className="mb8">
            <CommonButton text="Aquastock" containerClass="middle" />
          </div>
          <div className="opacity3">
            <p>3% have this trait</p>
          </div>
        </div>

        <div className="properties-box">
          <div className="mb8">
            <p className="content-title">Move</p>
          </div>
          <div className="mb8">
            <CommonButton text="Aquastock" containerClass="middle" />
          </div>
          <div className="opacity3">
            <p>3% have this trait</p>
          </div>
        </div>

        <div className="properties-box">
          <div className="mb8">
            <p className="content-title">Move</p>
          </div>
          <div className="mb8">
            <CommonButton text="Aquastock" containerClass="middle" />
          </div>
          <div className="opacity3">
            <p>3% have this trait</p>
          </div>
        </div>
      </div>
    </div>
  </>
}
