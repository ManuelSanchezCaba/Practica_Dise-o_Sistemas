/*
    Aqui estan definidas las funciones para el crud de mi tabla order_pack
*/
import { Request, Response } from 'express'
import { connect } from '../database'
import { List, List_Packages } from '../interface/interfaces'

//Esta funcion busca un paquete de listas de ordenes por ID
export async function findById(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list = await conn.query('SELECT * FROM order_pack WHERE id_order_pack = ?', [req.body.id_order_pack]);
    return res.json(list[0]);
}

//Esta funcion busca todos los paquetes de lista de ordenes
export async function find(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list = await conn.query('SELECT * FROM order_pack');
    return res.json(list[0]);
}

//Esta funcion crea un paquete de ordenes
export async function saveList(req: Request, res: Response): Promise<Response> {
    const new_list: List_Packages = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO order_pack SET ? ', [new_list]);
    return res.json(
        { message: 'List Packages Created' }
    );
}

//Esta funcion elimina un paquete de listas de ordenes
export async function deleteList(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list: List_Packages = req.body;
    await conn.query('DELETE FROM order_pack WHERE id_order_pack = ?', [list.id_order_pack]);
    return res.json(
        { message: 'List Packages Deleted' }
    );
}

//Esta funcion actualiza los campos de mi paquete de lista
export async function updateList(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list: List_Packages = req.body;
    const date = new Date();
    const result = await conn.query("UPDATE order_pack SET ? WHERE id_order_pack = ? AND expiration_date > ?", [list, list.id_order_pack, date]);
    return res.json(
        { message: 'List Packages Updated' }
    );
}

export async function getNameCollaborator(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list: List_Packages = req.body;
    const name = await conn.query('SELECT user_names FROM user WHERE id_user = (SELECT creator FROM order_pack WHERE creator = ?)', [list.creator]);
    return res.json(name[0]);
}