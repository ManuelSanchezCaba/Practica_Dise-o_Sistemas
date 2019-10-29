import { Request, Response } from 'express'
import { connect } from '../database'
import { List } from '../interface/interfaces'

export async function getList(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const list = await conn.query('SELECT * FROM orden');
    return res.json(list[0]);
}

export async function createList(req: Request, res: Response) {
    const new_list: List = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO orden SET ? ', [new_list]);
    return res.json(
        { message: 'List Created' }
    );
}