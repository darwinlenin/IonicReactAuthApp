import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from "./Auth";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";


import {IonApp} from '@ionic/react';

const auth=new Auth();

let state = {};

window.setState = (changes)=>{
  state = Object.assign({},state,changes);
  ReactDOM.render(
    <IonApp>
      <App {...state}/>
    </IonApp>,
    document.getElementById('root')
  );
}

/* eslint no-restricted-globals: 0*/
let name = auth.getProfile().name || "";
let pictureprofile = auth.getProfile().picture || "";
let nickname = auth.getProfile().nickname || "";

let initialState = {
  name : name,
  nickname : nickname,
  pictureprofile : pictureprofile,
  location : location.pathname.replace(/^\/?|\/$/g,""),
  auth
};

window.setState(initialState);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
