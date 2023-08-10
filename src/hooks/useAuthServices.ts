import useAuth from './useAuth';

import { ProductServices } from '@/services/product';

export default function useAuthServices() {
	const { token } = useAuth();

	return {
		ProductServices: new ProductServices(token),
	};
}
