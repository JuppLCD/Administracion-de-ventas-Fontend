import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Auth from '@/pages/Auth';

import actionHome from './actions/home';

import ErrorBoundary from '@/components/ErrorBoundary';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		action: actionHome,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);
