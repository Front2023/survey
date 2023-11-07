import React from 'react';
import { createRoot } from 'react-dom/client'; // 수정된 import 경로

import Login from './Login'; // 파일 경로 확인

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);