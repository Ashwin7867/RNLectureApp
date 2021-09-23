import {ADD_LECTURE, ADD_SECTION} from './actionTypes';

export const addSection = (content) => {
    return {
        type : ADD_SECTION,
        payload : {
            section_name : content
        }
    }
}

export const addLecture = (section_name , lecture_name) => {
    console.log(section_name , lecture_name);
    return {
        type : ADD_LECTURE,
        payload : {
            sec_name : section_name,
            lecture_name : lecture_name
        }
    }
}

