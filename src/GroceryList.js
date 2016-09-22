var React = require('react');
var Items = require('./Items');

var GroceryList = React.createClass({
  render: function(){
    var groceryItems = this.props.data.map(function(groceries){
      return (
        <Items item={groceries.item} key = {groceries.number} />
      );
    });

    return (
      <ul>
          {groceryItems}
      </ul>
    );
  }
});


module.exports= GroceryList;
