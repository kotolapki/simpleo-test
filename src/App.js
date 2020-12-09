import React from 'react';
import {connect} from 'react-redux';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './styles.css';
import Autorization from './components/Autorization';
import Main from './components/Main';

function App({loginStatus}) {
  return (
    <div className="App">
      {loginStatus?
        <Main />
        :
        <Autorization />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loginStatus: state.usersInformation.signInStatus
  }
}

export default connect(mapStateToProps, null)(App);