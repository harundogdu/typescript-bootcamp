export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public category?: {
            id: number;
            name: string;
        },
        public description?: string
    ) { }
}