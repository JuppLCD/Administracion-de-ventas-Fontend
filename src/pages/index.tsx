import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';

function Pages() {
	return <RouterProvider router={router} />;
}

export default Pages;
