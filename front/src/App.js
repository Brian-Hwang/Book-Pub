import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import ViewerPage from './pages/ViewerPage/ViewerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/viewer" component={ViewerPage} />
      </Switch>
    </Router>
  );
}

export default App;
