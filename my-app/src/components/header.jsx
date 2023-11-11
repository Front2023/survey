import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img className='logo' src={process.env.PUBLIC_URL + './image_2.png'} alt="logo" />

      <h1>Chosun.servey</h1>
      <nav>
        <h3><a href="mainbefore.html">로그인</a></h3>
        <h3><a href="login.html">회원가입</a></h3>
      </nav>
    </header>
  );
};
export default Header;

//페이지 이동 문제 해결하기
//로그인 전 후 다르게 나와야 하는데 어떻게 할거니