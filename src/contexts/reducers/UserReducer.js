import {
  SET_USER,
  SET_AVATAR,
  SET_EMAIL,
  SET_ID,
  SET_NAME,
} from '../actions/UserActions';

export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {...action.payload.user};
    case SET_AVATAR:
      return {...state, avatar: action.payload.avatar};
    case SET_EMAIL:
      return {...state, avatar: action.payload.email};
    case SET_ID:
      return {...state, avatar: action.payload.id};
    case SET_NAME:
      return {...state, avatar: action.payload.name};
    default:
      return state;
  }
};
