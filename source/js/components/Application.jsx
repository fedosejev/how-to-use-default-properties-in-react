import React from 'react';
import Item from './Item.jsx';

let Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            
            <Item whatIsUniqueAboutThisItem="This is the first item" />
            <Item whatIsUniqueAboutThisItem="This is the second item" />
            <Item whatIsUniqueAboutThisItem="This is the third item"
                  didYouKnowThat="You can overwrite the default properties" />

          </div>
        </div>
      </div>
    );
  }
});

export default Application;