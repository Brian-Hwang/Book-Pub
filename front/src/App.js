
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import EditPage from './pages/EditPage/EditPage';
import KustomPage from './pages/KustomPage/KustomPage';
import ViewerPage from './pages/ViewerPage/ViewerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/edit" component={EditPage} />
        <Route exact path="/kustom" component={KustomPage} />
        <Route exact path="/viewer" component={ViewerPage} />
      </Switch>
    </Router>
  );
}

export default App;
