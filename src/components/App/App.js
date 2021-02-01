import './App.css';
import { Route } from 'react-router-dom'
import { Component } from 'react';
import AboutPage from '../../routes/AboutPage/AboutPage';
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Route
            exact
            path='/'
            component={AboutPage}
        />
        <Route
            path='/projects'
            component={ProjectsPage}
        />
      </div>
    );
  }
}

export default App;
