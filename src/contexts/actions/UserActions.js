export const SET_AVATAR = 'SET_AVATAR';

function setAvatar(avatar) {
  return {
    type: SET_AVATAR,
    payload: {
      avatar,
    },
  };
}

export {setAvatar};
