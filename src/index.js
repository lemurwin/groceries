import React from 'react';
import ReactDOM from 'react-dom';
import GroceryContainer from './GroceryContainer';
import './index.css';
var firebase = require('firebase');
var groceries = require('./groceries')



var data = [


      {"type": "produce", "item": "tomatoes"},

      {"type": "baking", "item": "cake mix"}

];

ReactDOM.render(
  <GroceryContainer data={data}/>,
  document.getElementById('root')
);
