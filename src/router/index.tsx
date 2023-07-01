import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/user',
		element: <User />,
	},
]);
