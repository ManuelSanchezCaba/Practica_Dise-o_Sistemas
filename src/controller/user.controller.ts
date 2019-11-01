/*
    Aqui estan definidas las funciones para el crud de mi tabla user
*/
import { Request, Response } from 'express'
import { connect } from '../database'
import { User } from '../interface/interfaces';

//Esta funcion busca un usuario por ID
export async function findById(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const user = await conn.query('SELECT * FROM user WHERE id_user = ? ', [req.body.id_user]);
    return res.json(user[0]);
}

//Esta funcion busca todos los usuarios
export async function find(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const user = await conn.query('SELECT * FROM user');
    return res.json(user[0]);
}

//Esta funcion crea un usuario
export async function saveUser(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const new_user: User = req.body;
    await conn.query('INSERT INTO user SET ? ', [new_user]);
    return res.json(
        { message: 'User Created' }
    );
}

//Esta funcion elimina un usuario
export async function deleteUser(req: Request, res: Response) :Promise<Response> {
    const conn = await connect();
    const new_user: User = req.body;
    await conn.query("DELETE FROM user WHERE user_names = '" + new_user.user_names + "'");
    return res.json(
        { message: 'User Deleted' }
    );
}

//Esta funcion valida si un usuario existe para poder logearse
export async function SignIn(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const user: User = req.body;
    const row = await conn.query('SELECT * FROM user');
    const value = row;

    return res.json("SignIn");
}