import { Router } from 'express'

const routes = Router()

routes.get('/get', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM clientes', (err, data)=>{
            if(err) return res.send(err)

            res.json(data)
        })
    })
})

routes.post('/post', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO clientes SET ?',[req.body], (err, data)=>{
            if(err) return res.send(err)

            res.send('client added')
        })
    })
})

module.exports = routes;