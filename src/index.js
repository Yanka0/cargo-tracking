import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './AppRoutes';
import "./i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRoutes/>
);