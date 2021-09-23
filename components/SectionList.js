import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text, TouchableOpacity
} from 'react-native';

import Section from './Section';

import {connect} from 'react-redux';

class SectionList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {section_array_prop, sectionListProp} = this.props;
        if(section_array_prop.length === 0){
            return <Text>{'NO Section added'}</Text>
        }
        console.log(section_array_prop, sectionListProp);
        const section_list_comp = section_array_prop.map((section_name) => <Section section_name_prop = {section_name}
                                                                                lectureList = {sectionListProp[section_name]} />)
        return (
            <View style = {styles.container}>
                {section_list_comp}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const sectionList = state.section_list;
    const sections_array = Object.keys(sectionList);
    return {}
}

export default connect(mapStateToProps)(SectionList);

const styles = StyleSheet.create({
    container : {
        marginLeft : 20,
        flexDirection : 'column'
    }
})