export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const API_BACKEND_URL = BACKEND_URL + '/api';

// BASIC
export const STORE_PATH = '/store';

// ROUTES
export const API_PATH_USER = API_BACKEND_URL + '/auth';
export const API_PATH_PRODUCT = API_BACKEND_URL + '/product';

// USER
export const API_PATH_USER_VALIDATE_TOKEN = API_PATH_USER + '/validate_token';
export const API_PATH_USER_CODE = '/code';
export const API_PATH_USER_LOGIN = '/login';

// Product
export const API_PATH_PRODUCT_GET_BY_CATEGORY = '/category';
