import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Login from './Login';
import Notfound from './NotFound'


import{BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';

function App (){
    return(
           <Router>
             <div>
               <h2> THIS IS SECOND EXAMPLE FOR PAGE CHANGE OR NAVIGATION </h2>

               <Link exact to='/'>Home</Link>
               <NavLink exact activeClassName="active" to='/about' >About </NavLink>
               <NavLink exact activeClassName="active" to='/dashboard' > Dashboard</NavLink>
               <NavLink exact activeClassName="active" to='/login' > Login</NavLink>
               <NavLink activeClassName="active" to='/contact'>Contact</NavLink>

               <hr/>

               <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/about' component={About}/>
                 <Route exact path='/contact' component={Contact}/>
                 <Route exact path='/dasboard' component={Dashboard}/>
                 <Route exact path='/login' component={Login}/>
                 <Route component={Notfound}/>

               </Switch>

             </div>
           </Router>
    )
  }


export default App;