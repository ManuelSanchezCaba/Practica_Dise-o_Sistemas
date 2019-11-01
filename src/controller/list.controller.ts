/*
    Aqui estan definidas las funciones para el crud de mi tabla orden
*/
import { Request, Response } from 'express'
import { connect } from '../database'
import { List } from '../interface/interfaces'

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