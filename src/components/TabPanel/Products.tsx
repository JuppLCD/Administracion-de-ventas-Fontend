import { Card, CardBody, CardFooter, Heading, Image, Stack, TabPanel, Text } from '@chakra-ui/react';

function ProductsTabPanel() {
	const products = [
		{
			id: 1,
			name: 'Producto 1',
			category_id: 1,
			price: 50,
			stock: 5,
			description: 'Description of the product',
			code: '864d68sa4f',
			img: 'https://dummyimage.com/300x200/000/fff.png',
		},
		{
			id: 2,
			name: 'Producto 2',
			category_id: 1,
			price: 50,
			stock: 5,
			description: 'Description of the product',
			code: '864444444f',
			img: 'https://dummyimage.com/300x200/000/fff.png',
		},
		{
			id: 3,
			name: 'Producto 3',
			category_id: 1,
			price: 50,
			stock: 5,
			description: 'Description of the product',
			code: '888888868sa4f',
			img: 'https://dummyimage.com/300x200/000/fff.png',
		},
	];
	return (
		<TabPanel>
			<ul>
				{products.map((product) => (
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
