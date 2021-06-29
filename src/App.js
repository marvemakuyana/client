import './App.css';
import JobsList from './components/JobsList';
import ViewJob from './components/ViewJob';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Jobs</h1>
      <JobsList /> 
      {/* <Router>
        <Switch>
        <Route path='/' exact  component={JobsList}/>
          <Route path ='/job/:id'  component={ViewJob} />   
          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
