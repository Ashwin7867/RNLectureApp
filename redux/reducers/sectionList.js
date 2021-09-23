import {ADD_LECTURE, ADD_SECTION} from '../actionTypes';

const initialState = {
    section_list : {}
}

export default function sectionList(state = initialState, action){
    switch(action.type){
        case ADD_SECTION : {
            const { section_name } =  action.payload;
            return {
                ...state,
                section_list : {
                    ...state.section_list,
                    [section_name] : []
                }
            }    
        }
        case ADD_LECTURE : {
            const { sec_name , lecture_name} = action.payload;
            return {
                ...state,
                section_list : {
                    ...state.section_list,
                    [sec_name] : [...state.section_list[sec_name], lecture_name]
                }
                }
            }
        default :
            return state;
    }
}
