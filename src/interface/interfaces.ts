/* 
    Aqui estan todas las definiciones de las interfaces de mis tablas
*/
export interface List_Packages {
    id_order_pack?: number;
    creator: number;
    orders: number;
    expiration_date: string;
}

export interface List {
    id_order?: number;
    order_description: string;
    price: number;
    id_user: number;
    pay_method: string;
    payed: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface User {
    id_user?: number;
    user_names: string;
    email: string; 
    user_password: string;
    orders: number;
    order: number;
}