import {SET_AVATAR} from '../actions/UserActions';

export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_AVATAR:
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
};
