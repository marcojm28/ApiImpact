import { Router } from 'express';
import serviceClient from '../services/client.service';
const routes = Router();

routes.post('/creacliente', (req, res)=>{
    serviceClient.client.createClient(req, res);
})

routes.get('/kpideclientes', (req, res)=>{
    serviceClient.client.kpiclients(req, res);
})

routes.get('/listclientes', (req, res)=>{
    serviceClient.client.listClients(req, res);
})

module.exports = routes;