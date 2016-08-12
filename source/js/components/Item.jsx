import React from 'react';

let Item = React.createClass({
  getDefaultProps: function () {
    return {
      didYouKnowThat: "This default property will be shared across all Item component instances"
    };
  },

  render: function () {
    let style = {
      marginTop: "20px"
    };

    return (
      <div className="panel panel-default text-left" style={style}>
        <div className="panel-heading">This is an Item component instance.</div>
        <div className="panel-body">
          <p>Did you know that...</p>
          <p><strong>{this.props.didYouKnowThat}</strong>.</p> 
          <p>There is something unique about this item too...</p>
          <p><strong>{this.props.whatIsUniqueAboutThisItem}</strong>.</p>
        </div>
      </div>
    );
  }
});

export default Item;