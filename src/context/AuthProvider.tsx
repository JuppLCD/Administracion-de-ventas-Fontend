import { useEffect, useState } from 'react';

import { KEY_LOCAL_STORAGE_TOKEN } from '@/config';

import { AuthContext } from './AuthContext';

import { UserServices } from '@/services/user';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }: Props) => {
	const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		(async () => {
			const localToken = localStorage.getItem(KEY_LOCAL_STORAGE_TOKEN);
			try {
				if (localToken !== null) {
					const res = await UserServices.validateToken(localToken);

					if (res.status === 204) {
						setIsAuth(true);
						setToken(res.data.token);
					} else {
						localStorage.removeItem(KEY_LOCAL_STORAGE_TOKEN);
					}
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const logout = () => {
		localStorage.removeItem(KEY_LOCAL_STORAGE_TOKEN);
		setIsAuth(false);
		setToken('');
	};

	const updateToken = (newToken: string) => {
		setToken(newToken);
	};

	return <AuthContext.Provider value={{ isAuth, token, logout, updateToken }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
