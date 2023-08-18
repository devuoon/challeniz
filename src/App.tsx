import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// pages
import ListPage from './pages/list_page';
import NewPage from './pages/new_page';
import ApplicationPage from './pages/application_page';
import MainPage from './pages/main_page';
import LoginPage from './pages/login/login_page';
import JoinPage from './pages/join/join_page';
import MyPage from './pages/my_page';
import AuthPage from './pages/auth_page';
import DetailPage from './pages/detail_page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage  />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/applicationpage" element={<ApplicationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/applicationpage" element={<ApplicationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
