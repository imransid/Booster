import React, {Component} from 'react';

import Routes from './src/routes/navigator/nav';
import store from './src/config/store';
import { Provider } from 'react-redux';
import './src/reducers';

// import Icon from 'react-native-vector-icons/FontAwesome';


export default class App extends Component{
  render() {
    return (

        <Provider store={store}>
          <Routes/>
        </Provider>

    );
  }
}
