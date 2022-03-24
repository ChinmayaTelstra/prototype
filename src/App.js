import './App.css';
import "antd/dist/antd.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import API from './pages/API';

function App() {

    return (<div className="App">
            <BrowserRouter>
                {/*<Route path='/' exact component={Login}/>*/}
                <Route path='/home' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/orders' exact component={Orders}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/api' exact component={API}/>
            </BrowserRouter>
        </div>);
}

export default App;
