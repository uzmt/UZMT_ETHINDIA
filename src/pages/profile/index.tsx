import { BottomTab } from "components/common/BottomTab"
import Banner from "assets/img/banner.jpg"
import User from "assets/img/tab-user.svg"
import { useState, useEffect } from "react"
import { TabMyNft } from "components/profile/TabMyNft"
import { TabRent } from "components/profile/TabRent"
import { TabInSell } from "components/profile/TabInSell"
import Logo from "assets/img/logo-w.svg"
import Arrow from "assets/img/Arrow_icon.png"
import Whole from "assets/img/whole_icon.png"
import Avatar from "assets/img/Avatar_icon.png"
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Link } from "react-router-dom"
import {ethers} from 'ethers'
import ABI from '../../utils/abi.json'
import {client, getProfiles, recommendProfiles} from '../../utils/api';
import {id} from '../../utils/id';
const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";

export const Profile = () => {
  const [tab, setTab] = useState<"my" | "sell" | "rent">("my")
  const [profile, setProfile] = useState()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(() => {
    if (id) {
        fetchProfile()
    }

}, [id])

  async function fetchProfile() {
    try {
        
        const response = await client.query(getProfiles, { id }).toPromise()
        
        setProfile(response.data.profiles.items[0]);

    } catch (err) {
        console.log(err);
    }
  }

  console.log(profile);

  return (
  <>
  <div className="app home-tab-container">
        <Link to="/game">
          <img src={Logo} alt="logo" />
        </Link>
        <p className="title no-margin">

        </p>
        <div className="bell-container">
          {
            isConnected ? (
              
              <div>
                {
                  profile ? (
                    <Link to="/profile">
                    <img src={profile.picture.original.url} className="avatar"/>
                  </Link>
                  ):(
                    <div style={{ width: "200px", height: "200px", backgroundColor: 'black' }} />
                  )
                }
              </div>
            ) : (
              <div className="d-flex row y-center">
                <p className="wallet-connect">Tap to Connect wallet</p>
                <img src={Arrow} />
                <img src={Whole} onClick={() => connect()} />
              </div>

            )
          }
        </div>
      </div>
  <div className="app black">
    <div className="pb90">
      <div className="profile-bg"></div>
      <div className="">
        <div className="banner mb80">
          <img src={Banner} className="banner-img" />
          <div className="profile">
            <div className="inner">
              {profile? (
                 <img src={profile.picture.original.url} alt=""/>
              ):(
                <div style={{ width: "200px", height: "200px", backgroundColor: 'black' }} />
              )}
             
            </div>
          </div>
        </div>
        <div className="tc mb30">
          {
            profile? (
              <>
              <h3 className="title mb8">
              {profile.handle}
            </h3>
                      <p className="desc opacity8">
                     {profile.bio.slice(0,53)}<br/>{profile.bio.slice(53)}
                    </p>
                    </>
            ):(
              <h3 className="title mb8">
              
            </h3>
            )
          }

        </div>


        <div className="cnt-container mb40">
          <p>
            <span className="cnt">20</span> <br />
            Rental
          </p>
          <p>
            {
              profile ? (
                <span className="cnt">{profile.stats.totalFollowers}</span>
              ):
              (
                <span className="cnt">0</span>
              )
            }
             <br />
            Followers
          </p>
          <p>
          {
              profile ? (
                <span className="cnt">{profile.stats.totalFollowing}</span>
              ):
              (
                <span className="cnt">0</span>
              )
            }
            <br />
            Following
          </p>
        </div>

        <div className="main-tab">
          <div className={`tab ${tab === "my" ? "active" : ""}`} onClick={() => setTab("my")}>
            <p>My NFT</p>
          </div>
          {
            //<div className={`tab ${tab === "my" ? "active" : ""}`} onClick={() => setTab("my")}>
            //<p>NFT in sell</p>
            //</div>
          }
          <div className={`tab ${tab === "rent" ? "active" : ""}`} onClick={() => setTab("rent")}>
            <p>NFT in Rent</p>
          </div>
          
          
        </div>
        {tab === "my" && <TabInSell />}
        {tab === "rent" && <TabRent />}


      </div>
    </div>
  </div>

</>)
}
