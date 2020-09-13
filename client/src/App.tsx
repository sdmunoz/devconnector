import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppBarComponent from './shared/components/app-bar/app-bar.component';
import Landing from './shared/components/landing/landing.component';
import Login from './shared/components/auth/login.component';
import Register from './shared/components/auth/register.component';

interface IProps {}

class App extends React.Component<IProps> {
  render() {
    return (
      <BrowserRouter>
        <>
          <AppBarComponent />
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
