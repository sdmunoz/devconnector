import React from 'react';
import AppBarComponent from './shared/components/app-bar/app-bar.component';
import Landing from './shared/components/landing/landing.component';

interface IProps {}

class App extends React.Component<IProps> {
  render() {
    return (
      <>
        <AppBarComponent />
        <Landing />
      </>
    );
  }
}

export default App;
