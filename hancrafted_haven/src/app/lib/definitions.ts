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

  export type FeaturedProduct = {
    id: string;
    creator_id: string,
    name: string,
    description: string,
    price: string,
    category: string,
  }

  export type FeaturedProductRaw = Omit<FeaturedProduct, 'price'> & {
    price: number;
  };


