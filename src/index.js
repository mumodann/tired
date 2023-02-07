import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

  const firebaseConfig = {
    apiKey: "AIzaSyBq6QlDyhVOv-U8x3Wu7EdfkMcLgw7VsQc",
    authDomain: "deploy-86609.firebaseapp.com",
    projectId: "deploy-86609",
    storageBucket: "deploy-86609.appspot.com",
    messagingSenderId: "527403633365",
    appId: "1:527403633365:web:e652e3324d8d3a5911b05c",
    measurementId: "G-VHC1144C8M"
  };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);