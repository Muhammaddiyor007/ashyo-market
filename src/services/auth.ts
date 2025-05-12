// src/services/auth.ts
import axios from 'axios';

const API = 'https://api.ashyo.fullstackdev.uz/auth';

export const signUp = (data: { name: string; email: string; password: string }) =>
  axios.post(`${API}/register`, data);

export const signIn = (data: { email: string; password: string }) =>
  axios.post(`${API}/login`, data);
