import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Auth from '@/pages/Auth';

import ActionHome from './actions/home';

import ErrorBoundary from '@/components/ErrorBoundary';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		action: ActionHome,
		errorElement: <ErrorBoundary />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);
