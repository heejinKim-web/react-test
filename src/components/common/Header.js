import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/common.scss";

const Header = () => {
  /*HEADER MENU*/
  const headerMenu = [
    {
      menuid: 1,
      link: "/",
      menuname: "CASEMAN",
    },
    {
      menuid: 2,
      link: "/",
      menuname: "종이박스",
    },
    {
      menuid: 3,
      link: "/",
      menuname: "부직포",
    },
    {
      menuid: 4,
      link: "/",
      menuname: "쇼핑백/캐리어",
    },
    {
      menuid: 5,
      link: "/",
      menuname: "디자인박스",
    },
    {
      menuid: 6,
      link: "/",
      menuname: "선물포장",
    },
    {
      menuid: 7,
      link: "/",
      menuname: "케이크박스",
    },
  ];

  /*hover 시 메뉴*/
  const [menuId, setMenuId] = useState(0);
  const menuHover = (i) => {
    setMenuId(i);
    console.log(i);
  };

  return (
    <header className="header">
      <div className="container header_container">
        <div className="logo">
          <Link to="/">CASEMAN</Link>
        </div>
        <nav className="nav">
          <ul>
            {headerMenu.map((menu, index) => (
              <li key={menu.menuid} onMouseEnter={() => menuHover(menu.menuid)}>
                <Link to={menu.link}>{menu.menuname}</Link>
                {menuId === menu.menuid && (
                  <ul>
                    {menuId === 1 && <li>1번</li>}
                    {menuId === 2 && <li>2번</li>}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="login">
          <Link to="/">로그인</Link>
          <Link to="/">장바구니</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
