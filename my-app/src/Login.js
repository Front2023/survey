import React, { useState } from 'react';
import './css/Login.css';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { userId, password, selectedOption }; // 전송할 데이터

    fetch('http://example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // 성공한 경우에 대한 동작을 추가하세요
        console.log('Success:', data);
      })
      .catch((error) => {
        // 실패한 경우에 대한 동작을 추가하세요
        console.error('Error:', error);
      });
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div className="login-container">
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <div className="login">
            <h2>로그인</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                  <label>
                    <input type="radio" name="option" value="student" onChange={(e) => setSelectedOption(e.target.value)}/>
                    학생
                  </label>
                  <label>
                    <input type="radio" name="option" value="faculty" onChange={(e) => setSelectedOption(e.target.value)}/>
                    교직원
                  </label>
                  <label>
                    <input type="radio" name="option" value="admin" onChange={(e) => setSelectedOption(e.target.value)}/>
                    관리자
                  </label>
              <br /><br />
              <input type="text" id="userid" placeholder="아이디" value={userId} onChange={(e) => setUserId(e.target.value)} required />
              <br />
              <input type="password" id="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <br /><br />
              <button type="submit">로그인</button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
