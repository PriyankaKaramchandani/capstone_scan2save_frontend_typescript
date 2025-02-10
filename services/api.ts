import axios from 'axios';

// const API_BASE_URL = 'http://192.168.5.159:5000/api';
const API_BASE_URL = 'https://capstone-scan2save-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const createNewUserProfile = async (profileData: any) => {
  try {
    console.log('Creating new user profile:', profileData);
    const response = await api.post('/new_user', profileData);
    console.log('New user profile created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating new user profile:', error);
    throw error;
  }
};


export const getUserProfile = async (userId: string) => {
    try {
      console.log(`Fetching user profile for user ID: ${userId}`);
      const response = await api.get(`/user/${userId}`);
      console.log('User profile fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  };
