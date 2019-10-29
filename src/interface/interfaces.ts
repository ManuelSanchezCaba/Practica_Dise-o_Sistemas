import { Decimal } from "mssql"

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