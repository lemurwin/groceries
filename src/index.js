import React from 'react';
import ReactDOM from 'react-dom';
import GroceryContainer from './GroceryContainer';
import './index.css';
var firebase = require('firebase');
var groceries = require('./groceries')

var config = {
  apiKey: "AIzaSyBDJOprm6scHGbp7kN5bq742oGwTbfbcuo",
  authDomain: "grocery-list-5b889.firebaseapp.com",
  databaseURL: "https://grocery-list-5b889.firebaseio.com",
  storageBucket: "grocery-list-5b889.appspot.com",
  messagingSenderId: "288202079502"
};
function Groceries(){
  this.checkSetup();
  this.initFirebase();
};

firebase.initializeApp(config);
Groceries.prototype.initFirebase = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};


Groceries.prototype.loadMessages=function() {
  this.messagesRef = this.database.ref('groceries');
  this.messagesRef.off();

  var sendData=function(data){
    var val = data.val();
    this.changeData(val.item);
  }.bind(this);
};
Groceries.prototype.changeData=function(item){
  var data=[item];
}




ReactDOM.render(
  <GroceryContainer data={Groceries.loadMessages}/>,
  document.getElementById('root')
);
