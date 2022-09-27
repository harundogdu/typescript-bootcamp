import { Product } from "./Product";
import { ProductService } from "./ProductSevice";

const productServices = new ProductService();

let result: Product | Product[];


productServices.updateProduct(2, {
    name: "Samsung S11",
    category: { id: 1, name: "Telefon" },
    price: 1500,
    description: "Samsung Telefon"
});

productServices.deleteProduct(1);

result = productServices.getProducts();
console.log(result)