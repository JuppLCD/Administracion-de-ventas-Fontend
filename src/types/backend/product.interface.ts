export interface IProduct {
	id: number;
	category_id: number;

	name: string;
	type: string;
	description: string;
	code: string;
	img: string;

	price: number;
	stock: number;
}

export type IProductToStore = Omit<IProduct, 'id'>;
export type IProductToUpdate = Partial<IProductToStore>;
