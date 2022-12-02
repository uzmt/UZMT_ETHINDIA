import { Link } from "react-router-dom"

export const GameCard = ({mainImg, profileImg, projectTitle, nftNum, to}: {mainImg: string, projectTitle: string, profileImg: string, nftNum: string, to: string}) => {

    return (
        <>
            <div className="game-card-container mb24" >
                <div>
                    <img src={mainImg} />
                </div>
                <div className="game-card-info pl16 pr16 pt17 pb21">
                    <div className="x-eq d-flex row">
                        <div className="d-flex row y-center">
                            <img src={profileImg} className="mr12"/>
                            <div className="d-flex colum pt2">
                                <p className="project-title mb8">{projectTitle}</p>
                                <p className="nft-nums">{nftNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} NFTs</p>
                            </div>
                        </div>
                        <Link to={to}>
                        <button className="game-play">Play now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}