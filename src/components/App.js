import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './other/NavBar';
import NavMenu from './other/NavMenu'
import {Home, About,Services, Locations, Delivery} from './pages/index';

class App extends React.Component{
  render(){
    return(
        <div className="wrapper">
          <NavMenu />
          <NavBar />
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/services'} component={Services} />
            <Route path={'/locations'} component={Locations} />
            <Route path={'/delivery'} component={Delivery} />
        </div>
    )
  }
}
export default App;
