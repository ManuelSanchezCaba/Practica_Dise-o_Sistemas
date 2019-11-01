/*
    Aqui esta la conexion a mi base de datos
*/
import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'ice_cream_ordering',
        connectionLimit: 10
    });

    return connection;
}