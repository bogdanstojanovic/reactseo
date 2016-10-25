import React, { Component,PropTypes } from 'react';

import Users from './components/Users';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
