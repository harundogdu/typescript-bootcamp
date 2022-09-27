import { Product } from "./Product";

export interface IProductService {
    getProducts(): Product[];
    getProduct(id: number): Product;
    createProduct(product: Product): void;
    updateProduct(id: number, product: Product): void;
    deleteProduct(id: number): void;
}