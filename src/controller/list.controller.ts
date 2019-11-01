/*
    Aqui estan definidas las funciones para el crud de mi tabla orden
*/
import { Request, Response } from 'express'
import { connect } from '../database'
import { List } from '../interface/interfaces'

//Esta funcion busca una orden por ID
export async function findById(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list = await conn.query('SELECT * FROM orden WHERE id_order = ?', [req.body.id_order]);
    return res.json(list[0]);
}

//Esta funcion busca todas las ordenes
export async function find(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list = await conn.query('SELECT * FROM orden');
    return res.json(list[0]);
}

//Esta funcion crea una lista
export async function saveList(req: Request, res: Response): Promise<Response> {
    const new_list: List = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO orden SET ? ', [new_list]);
    return res.json(
        { message: 'List Created' }
    );
}

//Esta funcion elimina una lista
export async function deleteList(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list: List = req.body;
    await conn.query('DELETE FROM orden WHERE id_order = ?', [list.id_order]);
    return res.json(
        { message: 'List Deleted' }
    );
}

//Esta funcion actualiza los campos de mi lista
export async function updateList(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list: List = req.body;
    await conn.query('UPDATE orden SET ? WHERE id_order = ?', [list, list.id_order]);
    return res.json(
        { message: 'List Updated' }
    );
}