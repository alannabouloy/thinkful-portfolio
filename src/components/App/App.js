import './App.css';
import { Route } from 'react-router-dom'
import { Component } from 'react';
import AboutPage from '../../routes/AboutPage/AboutPage';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Route
            exact
            path='/'
            component={AboutPage}
        />
      </div>
    );
  }
}

export default App;
