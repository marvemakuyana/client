import './App.css';
import JobsList from './components/JobsList';
import EditJobForm from './components/EditJobForm';
import NewJobForm from './components/NewJobForm';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Jobs</h1>
      
      {/* <JobsList />  */}
      <Router>
        <Switch>
          <Route path='/' exact  component={JobsList}/>
          <Route path ='/jobs/:id'  component={EditJobForm} /> 
          <Route path='/create' component={NewJobForm} />  
          </Switch>
        </Router>
    </div>
  );
}

export default App;
