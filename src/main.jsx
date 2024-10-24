// import './tailwind.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import HomePage from './routes/HomePage';
import SignPage from './routes/SignPage';
import RegisterPage from './routes/RegisterPage';

import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signIn" element={<SignPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </Router>
  </StrictMode>
);