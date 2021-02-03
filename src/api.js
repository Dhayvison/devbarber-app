import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({token}),
    });

    const json = await req.json();
    return json;
  },

  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({email, password}),
    });

    const json = await req.json();
    return json;
  },

  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({name, email, password}),
    });

    const json = await req.json();
    return json;
  },

  logOut: async () => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({token}),
    });

    const json = await req.json();
    return json;
  },

  getBarber: async (id) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`, {
      method: 'GET',
      headers: HEADERS,
    });

    const json = await req.json();
    return json;
  },

  getBarbers: async (lat = null, lng = null, address = null) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(
      `${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`,
      {
        method: 'GET',
        headers: HEADERS,
      },
    );

    const json = await req.json();
    return json;
  },
};
