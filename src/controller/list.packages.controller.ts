/*
    Aqui estan definidas las funciones para el crud de mi tabla order_pack
*/
import { Request, Response } from 'express'
import { connect } from '../database'
import { List, List_Packages } from '../interface/interfaces'

//Esta funcion crea un paquete de ordenes
export async function saveList(req: Request, res: Response): Promise<Response> {
    const new_list: List_Packages = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO order_pack SET ? ', [new_list]);
    return res.json(
        { message: 'List Packages Created' }
    );
}