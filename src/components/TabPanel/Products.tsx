import { useEffect, useState } from 'react';

import { TabPanel } from '@chakra-ui/react';
import ProductCard from '../ProductCard';

import useAuthServices from '@/hooks/useAuthServices';

import { ErrorBackendApi } from '@/services/utils';

import type { IProduct } from '@/types/backend/product.interface';

function ProductsTabPanel() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const { ProductServices } = useAuthServices();

	useEffect(() => {
		(async () => {
			const res = await ProductServices.getAll();

			if (res instanceof ErrorBackendApi) {
				console.log('Error en ProductTabPanel');
				console.log(res);
			} else {
				setProducts(res.products);
			}
		})();
		// * Correeguir esto, capaz tenga que utilizar useMemo en el ProductServices.getAll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<TabPanel>
			<ul>{products.length !== 0 && products.map((product) => <ProductCard product={product} key={product.id} />)}</ul>
		</TabPanel>
	);
}

export default ProductsTabPanel;
