import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text, TouchableOpacity
} from 'react-native';

import Lecture from './Lecture';

export default class LectureList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {lecture_list} = this.props;
        const lecture_list_comp = lecture_list && lecture_list.length ? lecture_list.map((lecture) => <Lecture lecture_name = {lecture} />) : null;
        return (
            <View style = {styles.container}>
                {lecture_list_comp}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginLeft : 30
    }
})