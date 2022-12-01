import Copy from "assets/img/copy.svg"

export const NftTabInfo = () => {

  return <>
    <div className="mb24">
      <p className="content-title mb12">
        Contract Address
      </p>
      <div className="copy-container">
        <p>
          Tokenkd31021mdoq301...mdoq301eQ5D
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
          Tokenkd31021mdoq301...mdoq301eQ5D
        </p>
        <img src={Copy} alt="" />
      </div>
    </div>
    <div className="mb24">
      <p className="content-title mb12">
        Token Standard
      </p>
      <div className="common-box">
        <p>Metaplex</p>
      </div>
    </div>

    <div className="mb24">
      <p className="content-title mb12">
        Blockchain
      </p>
      <div className="common-box">
        <p>Etherium</p>
      </div>
    </div>

    <div className="mb24">
      <p className="content-title mb12">
        Matadata
      </p>
      <div className="common-box">
        <p>Centralized</p>
      </div>
    </div>
  </>
}
