export interface Product {
    id: number;
    seller_id: number;
    name: string;
    description: string
    price: number;
    image_url?: string;
    category?: string;
}