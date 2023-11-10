import React from 'react';
import { createRoot } from 'react-dom/client'; // 수정된 import 경로

import Exit from './exit'; // 파일 경로 확인
import Mainbefore from './mainbefore';
import Mainafter from './mainafter';
import Login from './login';
import Mypage from './mypage';
import Setting from './setting';

createRoot(document.getElementById('root')).render(
    <Setting /> 
);

//라우터 관련 코드 추가 필요(페이지 전환)
//지금은 그냥 하나씩 확인하는 중