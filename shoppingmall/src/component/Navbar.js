import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  const menuList = [
    "여성",
    "Diveded",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
    dispatch({ type: "LOGOUT", payload: {} });
  };
  const goToHome = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log("we search", keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button
          className="close-btn"
          onClick={() => {
            setWidth(0);
          }}
        >
          ❌
        </button>
        <div className="side-menu-list ">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="login-bar">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo-bar" onClick={goToHome}>
        <img
          width={100}
          src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/697b276d-c669-4d88-b115-dd9e6cae3fae/28a9d5ed-4776-4fe0-9e19-007e8ed817a9/709px-H&M-Logo.svg.png"
        />
      </div>
      <div className="menu-bar">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
