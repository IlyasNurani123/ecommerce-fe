import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import AdminLogin from '../Authentication/admin/Login';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Home from '../../view/home';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute
              exact
              path={ROUTES.LANDING}
              component={Home}
            ></PublicRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
