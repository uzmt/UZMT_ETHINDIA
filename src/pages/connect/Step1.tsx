import { WalletItem } from "components/connect/WalletItem"
import nft0 from "assets/img/nft0.png"
import {useState, useEffect} from 'react'

export const Step1 = () => {
  const [rentalPeriod, setRentalPeriod] = useState(1);
  const [managerRatio, setManagerRatio] = useState(100);
  const [scholarRatio, setScholarRatio] = useState(0);

  useEffect(()=>{

  }, [scholarRatio, managerRatio])
  function handleAdminChange(e: React.ChangeEvent<HTMLInputElement>){
      setManagerRatio(Number(e.target.value));
    
  }

  function handleScholarChange(e: React.ChangeEvent<HTMLInputElement>){
    setScholarRatio(Number(e.target.value));
  }

  function handleRentalPeriod(e: React.ChangeEvent<HTMLInputElement>){
    setRentalPeriod(Number(e.target.value));
  }

  return <>
    <div className="mb36">
      <p className="opacity3 color-white tl">
        Rental Step 01
      </p>
      <h3 className="color-white tl">
        Lists<br />
        your Item Rental
      </h3>
    </div>

    <div className="mint-item">
      <img src={nft0} alt="" />
      <div className="mint-info"></div>
    </div>



    <div className="wallet-list mb10">
      <div className="line light"></div>
      <div className="pt24">
        <p className="title color-white no-margin">Rent Period</p>
        <p className="opacity3 color-white tl mb12">
          Please set rent period
        </p>
        <div className="d-flex row y-center">
          <div className="date date-icon">.</div>
          <input
            type="number"
            placeholder="0"
            className="rental-input pl10"
            defaultValue="1"
            onChange={handleRentalPeriod}
          >
          </input>
          <p className="ml10 color-white">days</p>
        </div>
      </div>
    </div>
    <div className="wallet-list mb10">
      <div className="line light white"></div>
      <div className="pt24 pb24">
        <p className="title color-white no-margin">Revenue Share Ratio</p>
        <p className="opacity3 color-white tl mb12">
          Please set revenue share ratio with your scholar,
          <br/>
          <br/>
        (Your Ratio) + (Scholar Ratio) = 100
        </p>
        <div className="d-flex row y-center">
          <div className="author dot-icon">.</div>
          <input
            type="number"
            placeholder="0"
            className="rental-input pl10"
            defaultValue={managerRatio}
            onChange={handleAdminChange}
          >
          </input>
          <p className="mr10 ml10">:</p>
          <input
            type="number"
            placeholder="0"
            className="rental-input pl10"
            defaultValue={scholarRatio}
            onChange={handleScholarChange}
          >
          </input>
        </div>
      </div>
      
      <div className="line light"></div>
    </div>
  </>
}
