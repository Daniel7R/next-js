import DB from '@database';
import next from 'next';

const { NextApiRequest, NextApiResponse }= next;

const allAvos= async(req, res) => {
    const db= new DB();

    const id= req.query.id

    const entry= await db.getById(id);
    res.setHeader("Content-type", "application/json")
    res.status(200).json({entry})
}

export default allAvos;