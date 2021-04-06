import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from '../Authentication/admin/Login';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <header className='header'>
          <title>
            <h1>This is Ecomerce site</h1>
          </title>
        </header>
        <main>
          <AdminLogin />
        </main>
      </Provider>
    </div>
  );
}

export default App;
