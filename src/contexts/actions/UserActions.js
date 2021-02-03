export const SET_USER = 'SET_USER';
export const SET_AVATAR = 'SET_AVATAR';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ID = 'SET_ID';
export const SET_NAME = 'SET_NAME';

function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}

function setAvatar(avatar) {
  return {
    type: SET_AVATAR,
    payload: {
      avatar,
    },
  };
}

function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: {
      email,
    },
  };
}

function setId(id) {
  return {
    type: SET_ID,
    payload: {
      id,
    },
  };
}

function setName(name) {
  return {
    type: SET_NAME,
    payload: {
      name,
    },
  };
}

export {setUser, setAvatar, setEmail, setId, setName};
