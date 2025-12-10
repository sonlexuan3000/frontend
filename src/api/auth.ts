import apiClient from './client';
import {type AuthResponse } from '../types';

export const authApi = {
  login: async (username: string): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/auth/login', {
      username,
    });
    return data;
  },

  getMe: async () => {
    const { data } = await apiClient.get('/api/me');
    return data;
  },
};