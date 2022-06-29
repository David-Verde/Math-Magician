
import React from 'react';
import Header from './header/header';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;