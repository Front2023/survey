import React, { useState } from 'react';
import '../style/result2.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function Result2(){
  return (
    <div className="exit-container">
      <Header />
      <div className="container">
        <Sidebar />
        <main>
        <div id="chart">
            <h2>[질문1]</h2>
            <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div id="chart">
                <h2>[질문2]</h2>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div id="chart">
                <h2>[질문3]</h2>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div id="text">
            <div class="que">
            <h2>[질문4](장문형)</h2>
            <h4>가장 좋아하는 동물은?</h4>
            </div>
            <table class="answer-table">
            <caption>기안답</caption>
            <tr>
                <td>강아지</td>
                <td>토끼</td>
            </tr>
            <tr>
                <td>고양이</td>
                <td>거북</td>
            </tr>
            </table>
        </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Result2;