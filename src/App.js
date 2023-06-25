import { Provider } from 'react-redux';
import './App.css';
import Login from './conponents/Login';
import Profile from './conponents/Profile';
import Navbar from './conponents/Navbar';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <HashRouter>
    <Routes>
      <Route  exact path='/' Component={Navbar}>
          <Route path="/" Component={Login} />
          <Route path="/profile" Component={Profile} />
     </Route>     
     </Routes>
     </HashRouter>
     </Provider>
    </div>
  );
}

export default App;
