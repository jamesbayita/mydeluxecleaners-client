import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home,Services, Locations, Coupons, Alterations} from './pages/index';
import {Helmet} from 'react-helmet';

function NoMatch() {
  return(
    <div>
      <h1>404</h1>
      <h2>Not Found</h2>
    </div>
  )
}
function App(){

    return(
        <div className="wrapper">
          <Switch>
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/services'} component={Services} />
            <Route path={'/locations'} component={Locations} />
            <Route path={'/coupons'} component={Coupons} />
            <Route path={'/alterations'} component={Alterations} />
            <Route component={NoMatch} />
          </Switch>
        </div>
    )
  }

export default App;
