export type Product = {
    id: string,
    seller_id: string,
    name: string,
    description: string,
    price: string,
    image_url: string,
    category: string,
}

export type ProductRaw = Omit<Product, 'price'> & {
    price: number;
  };