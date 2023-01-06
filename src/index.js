import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl1ObQYB9a6U78BXeKigC90FWWmKgUJFQ",
    authDomain: "proyectocoder-pgtrainingshop.firebaseapp.com",
    projectId: "proyectocoder-pgtrainingshop",
    storageBucket: "proyectocoder-pgtrainingshop.appspot.com",
    messagingSenderId: "958358135174",
    appId: "1:958358135174:web:4da7a8a639d92529c2cc07"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);