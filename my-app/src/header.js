import React from 'react';
import './css/header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="./img/image_2.png" alt="logo" />
      <h1>Chosun.servey</h1>
      <nav>
        <h3><a href="mainbefore.html">로그인</a></h3>
        <h3><a href="login.html">회원가입</a></h3>
      </nav>
    </header>
  );
};
//이미지 안 나오는 오류 해결하기
export default Header;