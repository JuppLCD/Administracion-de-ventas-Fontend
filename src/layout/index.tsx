import { Container } from '@chakra-ui/react';

export default function Layout({ ...promps }) {
	return <Container maxW='container.md' bg='white' rounded='2xl' shadow='base' p={5} {...promps} />;
}
