import { createContext } from 'react';

interface IAuthContext {
	isAuth: boolean;
	token: string;
	logout: () => void;
	updateToken: (newToken: string) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
