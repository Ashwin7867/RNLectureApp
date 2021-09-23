import React, {Component} from 'react';
import {View} from 'react-native';

import RootComp from './components/RootComp';

import {Provider} from 'react-redux';
import store from './redux/store';

export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store = {store}>
                <View>
                    <RootComp />
                </View>
            </Provider>
        )
    }
}