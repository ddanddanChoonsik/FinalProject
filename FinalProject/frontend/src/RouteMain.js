import React from "react";
import { Route, Routes } from "react-router-dom";
import { FinalHead, Footer, Header, Main, Menu } from "./components";
import './App.css';
import './AppHeemin.css';
import { CityInfoMain, PlaceInfo } from "./pages/cityinfo";
import { Calendar, Plan, DayPlan } from "./pages/plan";
import JoinForm from "./pages/login/JoinForm";
import { PlanDetail } from "./pages/detail";
import {Mypage, Dashboard, Profile} from "./pages/mypage";
// import { Dashboard } from "./pages/mypage";

const RouteMain = () => {
  return (
    <div className="main-main-back">
      <Menu/>

      <div id="main">
        <Routes>
          <Route path="/" element={<Main/>} />

          {/* cityinfo */}
          <Route path="/cityinfo" element={<CityInfoMain/>} />

          {/* Member */}
          <Route path="/join" element={<JoinForm/>} />

          {/* Planning */}
          <Route path="/plan/calendar" element={<Calendar/>} />
          <Route path="/plan" element={<Plan/>} />
          <Route path="/plan/:day" element={<DayPlan/>} />
          
          {/* PlaceInfo */}
          <Route path="/place/citydetail" element={<PlaceInfo/>}/>

          {/* Detail-Plan */}
          <Route path="/plan/detail" element={<PlanDetail />} />

          {/* mypage */}
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/mypage/profile" element={<Profile/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default RouteMain;


