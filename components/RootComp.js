import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  Text, TouchableOpacity, TextInput , SafeAreaView
} from 'react-native';

import SectionList from './SectionList';

import {connect} from 'react-redux';
import {addSection} from '../redux/actions';

class RootComp extends Component{
  constructor(props){
    super(props);
    this.state  = {
      show_section_form : false,
      section_text : ''
    }
  }
  handleAddPress = () => {
    this.setState({
      show_section_form : true
    })
  }
  handleCancelPress = () => {
    this.setState({
      show_section_form : false
    })
  }
  handleSubmitPress = () => {
    const {section_text} = this.state;
    this.props.addSection(section_text)
    this.setState({
      show_section_form : false,
      section_text : ' '
    })
  }
  handleChangeText = (text) => {
    this.setState({
      section_text : text
    })
  }
  getAddButton = () => {
    return (
      <TouchableOpacity style = {styles.section_add_button}
                                  onPress = {this.handleAddPress}>
                                  <Text style = {styles.add_button_text}>{'Add Section +'}</Text>
                             </TouchableOpacity>
    )
  }
  getForm = () => {
    return (
      <View style= {styles.section_form_container}>
        <TextInput placeholder = 'type section name here'
                  value = {this.state.section_text} 
                  onChangeText = {this.handleChangeText}
                  style = {styles.textinput_style} />
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
    </View>)
  }
  render(){
    const {show_section_form } = this.state;
    const {sections_array, sectionList } = this.props;
    return (
      <View style = {styles.container}> 
        {!show_section_form && this.getAddButton()}
        {!!show_section_form && this.getForm()}
        {!!sections_array.length>0 && <SectionList section_array_prop = {sections_array}
                                          sectionListProp = {sectionList} />}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const sectionList = state.section_list;
  const section_array =  Object.keys(sectionList);
  return {
    sectionList : sectionList,
    sections_array : section_array
  }
}

export default connect(mapStateToProps , {addSection})(RootComp)

const styles = StyleSheet.create({
  container : {
    marginTop : 50
  },
  section_add_button : {
    borderWidth : 2,
    borderColor : 'gray',
    width : 100,
    alignSelf : 'center'
   
  },
  add_button_text : {
    fontSize : 15,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  textinput_style : {},
  section_form_container : {
    borderColor : 'gray',
    borderWidth : 1
  },
  buttonContainer : {
    flexDirection : 'row'
  },
  submitButton : {
    borderColor : 'gray',
    borderWidth : 2
  },
  cancelButton : {
    borderColor : 'gray',
    borderWidth : 2
  }
})