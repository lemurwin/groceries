var React = require('react');

var Items = React.createClass({
  render: function(){
    return(
      <div>
        <li>{this.props.item}</li>
        </div>

    );
  }
});


module.exports=Items;
