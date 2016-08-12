import React from 'react';
import Panel from './Panel.jsx';

let Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            
            <Panel whatIsUniqueAboutThisPanel="This is the first panel" />
            <Panel whatIsUniqueAboutThisPanel="This is the second panel" />
            <Panel whatIsUniqueAboutThisPanel="This is the third panel"
                  didYouKnowThat="You can overwrite the default properties" />

          </div>
        </div>
      </div>
    );
  }
});

export default Application;