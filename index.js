/**
 * @format
 */

import React, { Component } from 'react';

import {AppRegistry, StatusBar, View} from 'react-native';
import Router from './app/router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './app/redux/store';
import {name as appName} from './app.json';
import SplashScreen from './app/Screens/splash/SplashScreen';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          showRealApp: false,
          showAction: false,
          //To show the main page of the app
        };
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }
    
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return <SplashScreen />;
        }
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={{flex: 1}}>
                        <StatusBar translucent={true} backgroundColor={'transparent'} />
                        <Router/>
                    </View>
                </PersistGate>
            </Provider>
        )
    }
}


// const App = () => (

//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <View style={{flex: 1}}>
//                 <StatusBar translucent={true} backgroundColor={'transparent'} />
//                 <Router/>
//             </View>
//         </PersistGate>
//     </Provider>
// );


AppRegistry.registerComponent(appName, () => App);
