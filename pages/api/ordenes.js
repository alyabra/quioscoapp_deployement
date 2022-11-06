import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha,
            },
        })
        console.log(req.body)
        res.json({metodo: "POST"})
    } else {
        res.json({metodo: "GET"})
    }
}