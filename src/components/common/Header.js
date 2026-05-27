import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/common.scss";

const Header = () => {
  /*HEADER MENU*/
  const headerMenu = [
    {
      menuid: 1,
      link: "/product",
      menuname: "CASEMAN",
    },
    {
      menuid: 2,
      link: "/product",
      menuname: "종이박스",
    },
    {
      menuid: 3,
      link: "/product",
      menuname: "부직포",
    },
    {
      menuid: 4,
      link: "/product",
      menuname: "쇼핑백/캐리어",
    },
    {
      menuid: 5,
      link: "/product",
      menuname: "디자인박스",
    },
    {
      menuid: 6,
      link: "/product",
      menuname: "선물포장",
    },
    {
      menuid: 7,
      link: "/product",
      menuname: "케이크박스",
    },
  ];

  /*hover 시 메뉴*/
  const [menuId, setMenuId] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //mobile pc 구분
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  //menu hover
  const menuHover = (id) => {
    if (!isMobile) setMenuId(id);
  };

  /*header mouseleave*/
  const menuMouseLeave = () => {
    if (!isMobile) setMenuId(0);
  };

  // 모바일에서만 작동할 클릭 이벤트
  const menuClick = (e, id) => {
    if (isMobile) {
      e.preventDefault();
      setMenuId(menuId === id ? 0 : id);
    }
  };

  return (
    <header className="header" onMouseLeave={menuMouseLeave}>
      <div
        className={`container header_container ${isMobileMenuOpen ? "nav_open" : ""}`}
      >
        <div className="logo">
          <Link to="/">CASEMAN</Link>
        </div>

        <nav className="nav">
          <ul className="main_menu">
            {headerMenu.map((menu, index) => (
              <li
                key={menu.menuid}
                onMouseEnter={() => menuHover(menu.menuid)}
                className={menuId === menu.menuid ? "active" : ""}
              >
                <Link to={menu.link} onClick={(e) => menuClick(e, menu.menuid)}>
                  {menu.menuname}
                </Link>
                {menuId === menu.menuid && (
                  <ul class="sub_menu">
                    {menuId === 2 && (
                      <>
                        <li>
                          <Link to="/product">종이박스</Link>
                        </li>
                        <li>
                          <Link to="/product">화이트 박스</Link>
                        </li>
                        <li>
                          <Link to="/product">컬러 박스</Link>
                        </li>
                        <li>
                          <Link to="/product">골판지 박스</Link>
                        </li>
                      </>
                    )}
                    {menuId === 3 && (
                      <>
                        <li>
                          <Link to="/product">부직포 가방</Link>
                        </li>
                        <li>
                          <Link to="/product">부직포 파우치</Link>
                        </li>
                        <li>
                          <Link to="/product">부직포 포장지</Link>
                        </li>
                      </>
                    )}
                    {menuId === 5 && (
                      <>
                        <li>
                          <Link to="/product">프리미엄 박스</Link>
                        </li>
                        <li>
                          <Link to="/product">럭셔리 박스</Link>
                        </li>
                        <li>
                          <Link to="/product">커스텀 박스</Link>
                        </li>
                      </>
                    )}
                    {menuId === 6 && (
                      <>
                        <li>
                          <Link to="/product">리본</Link>
                        </li>
                        <li>
                          <Link to="/product">포장지</Link>
                        </li>
                        <li>
                          <Link to="/product">스티커</Link>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="login">
          {/* 햄버거 버튼 (모바일에서만 보임) */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "nav_open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/">로그인</Link>
          <Link to="/">장바구니</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
