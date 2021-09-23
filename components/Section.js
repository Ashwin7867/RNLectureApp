import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text, TouchableOpacity, TextInput
} from 'react-native';

import LectureList from './LectureList';

import {connect} from 'react-redux';
import {addLecture} from '../redux/actions';

class Section extends Component{
    constructor(props){
        super(props);
        this.state = {
            show_form : false,
            lecture_text : '',
            name : ''
        }
    }
    handleAddButtonPress = () => {
        this.setState({
            show_form : true
        })
    }
    handleChangeText = (text) => {
        this.setState({
            lecture_text : text
        })
    }
    handleCancelPress = () => {
        this.setState({
            show_form : false
        })
    }
    handleSubmitPress = () => {
        const {lecture_text} = this.state;
        const {section_name_prop} = this.props;
        this.props.addLecture(section_name_prop , lecture_text);
        this.setState({
            show_form : false
        })
    }
    render(){
        console.log('from section comp', name)
        const {section_name_prop , lectureList} = this.props;
        const {show_form} = this.state;
        return (
            <View style = {styles.container}>
                <Text style = {styles.sectionHeader}>{section_name_prop}</Text>
                {!!lectureList && !!lectureList.length>0 &&  <LectureList lecture_list = {lectureList} />}
                {!show_form && <TouchableOpacity style = {styles.add_lecture_button}
                                        onPress = {this.handleAddButtonPress}>
                    <Text style = {styles.add_lecture_button_text}>{'Add Lecture +'}</Text>
                </TouchableOpacity>}
                {!!show_form && <View style= {styles.lecture_form_container}>
                              <TextInput placeholder = 'type lecture name here'
                                        value = {this.state.lecture_text} 
                                        onChangeText = {this.handleChangeText}
                                        style = {styles.inputText} />
                              <View style = {styles.buttonContainer}>
                                <TouchableOpacity style = {styles.submitButton}
                                  onPress = {this.handleSubmitPress}>
                                  <Text>{'Submit'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {styles.cancelButton}
                                onPress = {this.handleCancelPress}>
                                  <Text>{'Cancel'}</Text>
                                </TouchableOpacity>
                              </View>          
        </View>}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const sectionList = state.section_list;
    console.log('from mapState to props of section', sectionList)
    console.log(sectionList);
    return {
        section_list : sectionList
    }
}

export default connect(mapStateToProps, {addLecture})(Section)

const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        borderColor : 'gray',
        marginTop : 10,
        borderRadius : 5
    },
    inputText : {
        paddingLeft : 26,
        borderWidth : 1,
        borderColor : 'lightgray',
        marginBottom : 10,
        alignSelf : 'center',
        width : 250
    },
    lecture_form_container : {borderWidth : 1,
        borderColor : 'gray',
        paddingTop : 10
    },
    sectionHeader : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 12
    },
    add_lecture_button : {
        marginTop : 12,
        marginBottom : 10,
        borderWidth : 2,
        borderColor : 'gray',
        width :100,
        alignSelf : 'center'
    },
    add_lecture_button_text : {
        fontSize : 15,
        fontWeight : 'bold'
    },
    buttonContainer : {
        flexDirection : 'row',
        alignSelf : 'center',
        marginBottom : 10
    },
    cancelButton : {
        borderWidth : 1,
        borderColor : 'gray',
        borderRadius : 3
    },
    submitButton : {
        borderWidth : 1,
        borderColor : 'gray',
        borderRadius : 3,
        marginLeft : 10,
        marginRight : 10
    }
})