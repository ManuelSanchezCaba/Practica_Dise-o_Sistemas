import { Request, Response } from 'express'
import { connect } from '../database'
import { User } from '../interface/interfaces';

export async function getUser(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const user_table = await conn.query('SELECT * FROM user');
    return res.json(user_table[0]);
}

export async function validateUser(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const new_user: User = req.body;
    const rt = await conn.query("select count(*) as count from user where user_names = '" + new_user.user_names + "' and '" + new_user.user_password + "'");
    
    return res.json(rt[0]);
}

export async function SignUp(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const new_user: User = req.body;
    await conn.query('INSERT INTO user SET ? ', [new_user]);
    return res.json(
        { message: 'User Created' }
    );
}

export async function deleteUser(req: Request, res: Response) :Promise<Response> {
    const conn = await connect();
    const new_user: User = req.body;
    await conn.query("DELETE FROM user WHERE user_names = '" + new_user.user_names + "'");
    return res.json(
        { message: 'User Deleted' }
    );
}