import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../pages/Auth';

import actionHome from './actions/home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		action: actionHome,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);
