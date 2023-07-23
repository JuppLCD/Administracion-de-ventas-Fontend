import { createContext } from 'react';

interface IAuthContext {
	isAuth: boolean;
	token: string;
	logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
