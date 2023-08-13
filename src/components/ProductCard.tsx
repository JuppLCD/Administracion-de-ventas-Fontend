import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import type { IProduct } from '@/types/backend/product.interface';

interface Props {
	product: IProduct;
}
function ProductCard({ product }: Props) {
	return (
		<Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' key={product.id}>
			<Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={product.img} alt={product.name} />

			<Stack>
				<CardBody>
					<Heading size='md'>{product.name}</Heading>

					<Text py='2'>{product.description}</Text>
					<Heading as='h4' size='sm'>
						{product.type}
					</Heading>
				</CardBody>

				<CardFooter>
					<Text color='blue.600' fontSize='2xl'>
						${product.price} / {product.stock}
					</Text>
				</CardFooter>
			</Stack>
		</Card>
	);
}

export default ProductCard;
