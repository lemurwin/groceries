var React = require('react');
var GroceryInput = require('./GroceryInput');
var GroceryList = require('./GroceryList');
var firebase = require('firebase');



var GroceryContainer = React.createClass({
  database: function(){
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

  };
},
render: function(){
    return(
      <div>
        <h1>This is the grocery container</h1>
        <div><GroceryInput /></div>
        <div><GroceryList data={this.props.data}/></div>
      </div>
      //Grocery input and list will go here
    );
  }
});

module.exports=GroceryContainer;
