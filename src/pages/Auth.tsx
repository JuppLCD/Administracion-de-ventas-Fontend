import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from '../layout';

import ProductsTabPanel from '../components/TabPanel/Products';

function Auth() {
	return (
		<Layout>
			<Tabs variant='enclosed'>
				<TabList overflowX={'auto'} overflowY={'hidden'}>
					<Tab>💵 Ventas</Tab>
					<Tab>🤝 Clientes</Tab>
					<Tab>🏢 Proveedores</Tab>
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
						<p>Proveedores!</p>
					</TabPanel>
					<ProductsTabPanel />
				</TabPanels>
			</Tabs>
		</Layout>
	);
}

export default Auth;
