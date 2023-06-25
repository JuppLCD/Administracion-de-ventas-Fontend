export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const API_BACKEND_URL = BACKEND_URL + '/api/';

// ROUTES
const API_PATH_USER = '/auth';

// USER
export const API_PATH_USER_CODE = API_PATH_USER + '/code';
export const API_PATH_USER_LOGIN = API_PATH_USER + '/login';
