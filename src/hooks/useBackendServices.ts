import useAuth from './useAuth';

import { UserServices } from '../services/user';
import { ProductServices } from '../services/product';

export default function useBackendServices() {
	const { token } = useAuth();

	return {
		UserServices: new UserServices(),
		ProductServices: new ProductServices(token),
	};
}
