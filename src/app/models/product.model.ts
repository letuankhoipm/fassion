export interface ProductDetail {
    id: string;
    data: {
        name: string;
        price: string;
        description: string;
        imageUrl: string;
        origin?: string;
        brand?: string;
        shortDescription?: string;
    }
}