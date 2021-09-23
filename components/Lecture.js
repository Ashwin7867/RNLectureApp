import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text, TouchableOpacity
} from 'react-native';

export default class Lecture extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {lecture_name} = this.props;
        return (
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.lectureTextContainer}>
                    <Text style = {styles.lectureText}>{lecture_name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {

    },
    lectureTextContainer : {
        marginTop : 5
    },
    lectureText : {}
})