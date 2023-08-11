import { useEffect, useState } from 'react';

import { Card, CardBody, CardFooter, Heading, Image, Stack, TabPanel, Text } from '@chakra-ui/react';

import useAuthServices from '@/hooks/useAuthServices';

import type { IProduct } from '@/types/backend/product.interface';
import { ErrorBackendApi } from '@/services/utils';

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
				console.log(res);
				setProducts(res.products);
			}
		})();
		// * Correeguir esto, capaz tenga que utilizar useMemo en el ProductServices.getAll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<TabPanel>
			<ul>
				{products.length !== 0 &&
					products.map((product) => (
						<Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' key={product.id}>
							<Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={product.img} alt={product.name} />

							<Stack>
								<CardBody>
									<Heading size='md'>{product.name}</Heading>

									<Text py='2'>{product.description}</Text>
								</CardBody>

								<CardFooter>
									<Text color='blue.600' fontSize='2xl'>
										${product.price} / {product.stock}
									</Text>
								</CardFooter>
							</Stack>
						</Card>
					))}
			</ul>
		</TabPanel>
	);
}

export default ProductsTabPanel;
