export interface Product {
    id: number;
    creator_id: number;
    name: string;
    description: string
    price: number;
    //image_url?: string;
    category?: string;
}

export interface Image_ {
    id: number;
    product_id: number;
    image_url: string;
}