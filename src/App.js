import React, { Component } from 'react';
import Loading from './components/loading/loading.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  onEnableLoading = () => this.setState(prevStat=> ({loading: !prevStat.loading}));

  handleLoading = () => {
    this.onEnableLoading();
    setTimeout(this.onEnableLoading, 2000);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Loading Component</h1>
        </header>
        <main>
          <Loading
            className="section"
            enabled={this.state.loading}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button onClick={this.handleLoading}>
              Apply loading
            </button>
          </Loading>
        </main>
      </div>
    );
  }
}

export default App;
