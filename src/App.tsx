import { ChakraProvider } from '@chakra-ui/react';

import Pages from './pages';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<ChakraProvider>
			<AuthProvider>
				<Pages />
			</AuthProvider>
		</ChakraProvider>
	);
}

export default App;
