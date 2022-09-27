import { Product } from "./Product";

export class FakeDatabase {
    private products: Product[];
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Samsung S10",
                category: { id: 1, name: 'Telefon' },
                price: 1500,
                description: "Samsung Telefon"
            },
            {
                id: 2,
                name: "IPhone 6",
                category: { id: 1, name: "Telefon" },
                price: 1600,
                description: "IPhone Telefon"
            },
            {
                id: 3,
                name: "IPhone 8S",
                category: { id: 1, name: "Telefon" },
                price: 2000,
                description: "IPhone Telefon"
            },
            {
                id: 4,
                name: "IPhone 14 Pro Max",
                category: { id: 1, name: "Telefon" },
                price: 8000,
                description: "IPhone Telefon"
            }
        ]
    }

    getProducts(): Product[] {
        return this.products;
    }

}