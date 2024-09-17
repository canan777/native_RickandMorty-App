import {
    CHANGE_PARAMS,
    CHARACTERS_REJECT,
    FETCH_CHARACTERS,
    FETCH_SINGLECHARACTER,
    PENDING_CHARACTERS,
    PENDING_SINGLECHARACTER,
    SINGLECHARACTER_REJECT,
  } from '../types/characterTypes';
  
  const initialState = {
    characterList: [],
    singleCharacter: [],
    pending: false,
    pendingSingleCharacter: true,
    error: null,
    errorSingleCharacter: null,
    params: {
      page: 1,
      status: null,
      gender: null,
      name: null,
    },
  };
  
  const characterReducer = (state = initialState, action) => {
    switch (action.type) {
      case PENDING_CHARACTERS:
        return {
          ...state,
          pending: true,
        };
      case FETCH_CHARACTERS:
        return {
          ...state,
          characterList: action.payload,
          pending: false,
        };
      case CHARACTERS_REJECT:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
      case PENDING_SINGLECHARACTER:
        return {
          ...state,
          pendingSingleCharacter: true,
        };
      case FETCH_SINGLECHARACTER:
        return {
          ...state,
          singleCharacter: action.payload,
          pendingSingleCharacter: false,
        };
      case SINGLECHARACTER_REJECT:
        return {...state, errorSingleCharacter: action.error};
      case CHANGE_PARAMS:
        return {
          ...state,
          params: {
            ...state.params,
            ...action.params,
          },
        };
      default:
        return state;
    }
  };
  
  export default characterReducer;