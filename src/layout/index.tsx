import { Container } from '@chakra-ui/react';

export default function Layout({ ...promps }) {
	return <Container maxW='container.lg' centerContent mt={20} {...promps} />;
}
