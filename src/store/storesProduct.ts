import axios, { AxiosResponse } from "axios";
import { Product } from "./interfacesStore/interfaceStore";

export async function getProduct() {

    const response = await axios.get(
        'https://fakestoreapi.com/products');
    const products: Product[] = response.data;

    return products;

}

export async function getProductById(id: number) {

    const response = await axios.get(
        `https://fakestoreapi.com/products${id}`);
    const products: Product[] = response.data;

    return products;

}

