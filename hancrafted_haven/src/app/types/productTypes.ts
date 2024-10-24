export interface Product {
    id: number;
    user_id: number;
    name: string;
    description: string
    price: number;
    category?: string;
}

export interface Image_ {
    id: number;
    product_id: number;
    image_url: string;
}

// Define the enum for user types
export enum UserType {
    Admin = 'admin',
    Creator = 'creator',
    User = 'user',
}
export interface User {
    id: number;
    name: string;
    profile: string;
    bio: string;
    email: string;
    password: string;
    type: UserType;
}

//!NOTE When you create or manipulate a User object, you would do it like this:
//const newUser: User = {
//    id: 1,
//    name: 'Alice',
//    bio: 'I love coding!',
//    email: 'alice@example.com',
//    password: 'securepassword',
//    type: UserType.Creator, // Use the enum
//};


export interface Review_ {
    id: number;
    product_id: number;
    user_id: number;
    rating: number;
    comment: string;
}