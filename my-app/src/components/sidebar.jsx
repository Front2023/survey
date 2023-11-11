import React from 'react';
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#">설문 리스트</a></li>
        <li><a href="#">설문 만들기</a></li>
        <li><a href="#">나의 설문</a></li>
        <li><a href="#">마이페이지</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
//로그인 전, 후 접근권한 달라짐
//페이지 이동 문제 해결하기