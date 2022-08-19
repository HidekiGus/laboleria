import { addClient } from "../repositories/clientRepository.js";
import { getClientOrdersById } from "../repositories/clientRepository.js";

export async function postClient(req, res) {
    try {
        const newClientData = req.body;
        await addClient(newClientData);
        return res.sendStatus(201);
    } catch(error) {
        return res.sendStatus(500);
    }
}

export async function getClientOrders(req, res) {
    try {
        const id = req.params.id;
        const orders = await getClientOrdersById(id);
        if (orders.length === 0) {
            return res.status(404).send([]);
        }
        return res.status(200).send(orders);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
}