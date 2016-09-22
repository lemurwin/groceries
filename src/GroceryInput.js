var React = require('react');

var GroceryInput = React.createClass({
  render: function(){
    return(
      <div>
        <form>
          <input type='text' value='Groceries' />
        </form>
      </div>
    );
  }
});

module.exports= GroceryInput;
