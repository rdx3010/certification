
import './App.css';
import Details from './components/Details/Details';
import {BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import Vocher from './components/vocher/Vocher';
import  Payment  from './components/payments/Payment';
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Topbar from "./components/topbar/Topbar"
import Receipt from "./components/receipt/Receipt"
import Sidebar from './components/sidebar/Sidebar'
import Home from "./components/home/Home"
import Abcd from './pages/abcd/Abcd';

function App() {
  return (
 <Router>
   <Topbar/>
   
   <div className='contain'>
     
     <Switch>
       <Route exact path ="/">
         <Abcd/>
       </Route>
       <Route  path ="/login">
       {/* <Sidebar/> */}
         <Login/>
         </Route>
         <Route  path ="/register">
         {/* <Sidebar/> */}
         <Register/>
         </Route>
       <Route path ="/details">
       < Sidebar className="hello"/>
         <Details/>
         </Route>
         <Route  path ="/vocher">
         <Sidebar/>
         <Vocher/>
         </Route>
         <Route  path ="/payment">
         <Sidebar/>
         <Payment/>
         </Route>
         <Route  path ="/receipt">
         <Sidebar/>
         <Receipt/>
         </Route>

     </Switch>
   </div>
 </Router>
   
 
  );
}

export default App;
