import { Chat } from 'pages/chat';
import { Room } from 'pages/chat/Room';
import { Connect } from 'pages/connect';
import { GameDetail } from 'pages/home/GameDetail';
import { GameHome } from 'pages/home/GameHome';
import { Profile } from 'pages/profile';
import { Purchase } from 'pages/purchase';
import { PurchaseComplete } from 'pages/purchase/PurchaseComplete';
import { PurchaseLoading } from 'pages/purchase/PurchaseLoading';
import { Route, Routes } from 'react-router-dom';
import { NftInfo } from '../pages/detail/NftInfo';
import { Home } from '../pages/home';
import { Intro } from '../pages/intro';

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/game" element={<GameHome />} />
        <Route path="/gameDetail" element={<GameDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detail" element={<NftInfo />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchaseLoading" element={<PurchaseLoading />} />
        <Route path="/purchaseComplete" element={<PurchaseComplete />} />
        <Route path="/room" element={<Room />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}
