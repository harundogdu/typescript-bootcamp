import { FakeDatabase } from "./FakeDatabase";
import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductService implements IProductService {
    private dataSource: FakeDatabase;
    private products: Product[];
    constructor(
    ) {
        this.dataSource = new FakeDatabase()
        this.products = this.dataSource.getProducts()
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(product => product.id === id);
    }

    createProduct(product: Product): void {
        const isProductExist = this.products.find(p => p.name.toLowerCase() === product.name.toLowerCase())
        if (isProductExist) {
            throw new Error('Ürün daha önceden eklenmiş!')
        }

        product.id = this.generateId()

        this.products.push(product);
    }

    updateProduct(id: number, product: Product): void {
        const currentProduct = this.products.find(p => p.id === id)
        if (!currentProduct) {
            throw new Error('Böyle bir ürün bulunamadı!')
        }
        product.id = id;
        
        const findIndex = this.products.findIndex(p => p.id === product.id)
        this.products.splice(findIndex, 1, product);
    }

    deleteProduct(id: number): void {
        const findIndex = this.products.findIndex(p => p.id === id)
        if (findIndex < 0) {
            throw new Error('Böyle bir ürün bulunamadı!')
        }

        this.products.splice(findIndex, 1);
    }

    generateId(): number {
        let index = 1;

        while (this.products.find(p => p.id === index)) {
            index++;
        }

        return index;
    }

} 