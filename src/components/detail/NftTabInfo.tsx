import Copy from "assets/img/copy.svg"

export const NftTabInfo = () => {

  return <>
    <div className="mb24">
      <p className="content-title mb12">
        Contract Address
      </p>
      <div className="copy-container">
        <p>
          T0x6C6034dcb78891874133CB0FdB243D0e3cA7e767
        </p>
        <img src={Copy} alt="" />
      </div>
    </div>

    <div className="mb24">
      <p className="content-title mb12">
        Token ID
      </p>
      <div className="copy-container">
        <p>
          1
        </p>
        <img src={Copy} alt="" />
      </div>
    </div>
    <div className="mb24">
      <p className="content-title mb12">
        Token Standard
      </p>
      <div className="common-box">
        <p>ERC4907</p>
      </div>
    </div>

    <div className="mb24">
      <p className="content-title mb12">
        Blockchain
      </p>
      <div className="common-box">
        <p>Polygon</p>
      </div>
    </div>
  </>
}
