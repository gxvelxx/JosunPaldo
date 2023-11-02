import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import app from "./firebase";

// components 임포트
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Category from "./components/Category";

import Museum from "./components/Museum";
import Forest from "./components/Forest";
import Tourarea from "./components/Tourarea";

import SocialKakao from "./components/SocialKakao";
import KaKaoMap from "./components/KaKaoMap";
import MapData from "./components/MapData";
import Find from "./components/Find";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/oauth"
            element={<SocialKakao />}
          ></Route>
          <Route path="/auth" element={<SignUp />}></Route>
          <Route
            path="/category"
            element={<Category />}
          ></Route>
          <Route
            path="/museum"
            element={<Museum />}
          ></Route>
          <Route
            path="/forest"
            element={<Forest />}
          ></Route>
          <Route
            path="/tourarea"
            element={<Tourarea />}
          ></Route>
          <Route
            path="/kakaomap"
            element={<KaKaoMap />}
          ></Route>
          <Route
            path="/mapdata"
            element={<MapData />}
          ></Route>
          <Route path="/find" element={<Find />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
