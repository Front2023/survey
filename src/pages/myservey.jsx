import React, { useState } from 'react';
import '../style/myservey.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function Myservey(){
  return (
    <div className="exit-container">
      <Header />
      <div className="container">
        <Sidebar />
        <main>
            <div class="btn-group">
            <a href="#" class="btn">만든설문</a>
            <a href="#" class="btn">작성한설문</a>
            </div>
            <table class = "custom-table">
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>설문완료일시</td>
            </tr>
            <tr>
                <td>1</td>
                <td>가장 선호하는 동물은?</td>
                <td>2025-01-01 --:--</td>
            </tr>
            <tr>
                <td>2</td>
                <td>가장 선호하는 영화는?</td>
                <td>2025-01-01 --:--</td>
            </tr>
            <tr>
                <td>3</td>
                <td>물가상승률을 크게 체감하는 상황은?</td>
                <td>2025-01-01 --:--</td>
            </tr>
            </table>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Myservey;