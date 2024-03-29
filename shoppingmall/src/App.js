import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Productall from "./page/Productall";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1 네비게이션 바
//2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지 나옴
//3. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우에는 로그인 페이지 나옴
//4. 로그인이 되어있는 경우는 상품상세페이지 나옴
//5. 로그아웃 버튼을 클릭하면 로그아웃이된다.
//5. 로그아웃 되면 상품상세페이지 볼 수 없고, 다시 로그인 페이지가 보임
//6. 로그인을 하면 로그아웃이 보이고, 로그아웃하면 로그인이 보임
//7. 상품을 검색할 수 있다.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productall />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
