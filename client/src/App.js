import './resourses/App.css';
import "antd/dist/antd.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import MyOrders from './pages/MyOrders';
import Admin from './pages/Admin';
import API from './pages/API';
import Profile from './pages/Profile';

import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "./redux/actions/orderActions.";
import { getAllUsers } from "./redux/actions/userActions";
import { useEffect } from "react";

function App() {

    const { loader } = useSelector((state) => state.loaderReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders());

    }, []);

    return (<div className="App">
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/myorders' exact component={MyOrders}/>
                <Route path='/orders' exact component={Orders}/>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/api' exact component={API}/>
                <Route path='/profile' exact component={Profile}/>
                <Route path='/logout' exact component={Login}/>
            </BrowserRouter>
        </div>);
}

export default App;
