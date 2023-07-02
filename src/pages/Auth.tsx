import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from '../layout';

function Auth() {
	return (
		<Layout>
			<Tabs variant='enclosed'>
				<TabList>
					<Tab>💵 Ventas</Tab>
					<Tab>🤝 Clientes</Tab>
					<Tab>🛒 Productos</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<p>Ventas!</p>
					</TabPanel>
					<TabPanel>
						<p>Clientes!</p>
					</TabPanel>
					<TabPanel>
						<p>Productos!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Layout>
	);
}

export default Auth;
