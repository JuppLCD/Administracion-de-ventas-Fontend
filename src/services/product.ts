import { API_PATH_PRODUCT, API_PATH_PRODUCT_GET_BY_CATEGORY, STORE_PATH } from '../config';

import { AxiosAuthInstance } from './axios';
import { errorApiBackend } from './utils';

import type { IProduct, IProductToStore, IProductToUpdate } from '../types/backend/product.interface';

export class ProductServices extends AxiosAuthInstance {
	constructor(token: string) {
		super(token);

		this.authAxios.defaults.baseURL = API_PATH_PRODUCT;
	}

	getAll = async () => {
		try {
			const res = await this.authAxios.get<{ products: IProduct[] }>('');
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	getById = async (productId: number) => {
		try {
			const res = await this.authAxios.get<{ product: IProduct }>(`/${productId}`);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	getByCategory = async (categoryId: number) => {
		try {
			const res = await this.authAxios.get<{ product: IProduct }>(`${API_PATH_PRODUCT_GET_BY_CATEGORY}/${categoryId}`);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	store = async (productToStore: IProductToStore) => {
		try {
			const res = await this.authAxios.post<{ product: IProduct }>(STORE_PATH, productToStore);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	update = async (productId: number, fieldsToUpdate: IProductToUpdate) => {
		try {
			const res = await this.authAxios.post<{ product: IProduct }>(`/${productId}`, fieldsToUpdate);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	delete = async (productId: number) => {
		try {
			const res = await this.authAxios.delete<{ product: IProduct }>(`/${productId}`);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};
}
