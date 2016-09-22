var React = require('react');
var GroceryInput = require('./GroceryInput');
var GroceryList = require('./GroceryList');



var GroceryContainer = React.createClass({
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
