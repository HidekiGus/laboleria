import { createOrder, findOrderByDate, getAllOrders } from "../repositories/orderRepository.js";
import { findClientById } from "../repositories/clientRepository.js";
import { findCakeById } from "../repositories/cakeRepository.js";

export async function postOrders(req, res) {
    try {
        const newOrderData = req.body;
        const cakeExists = await findCakeById(newOrderData.cakeId);
        const clientExists = await findClientById(newOrderData.clientId);
        if (cakeExists && clientExists) {
            await createOrder(newOrderData);
            return res.sendStatus(201);
        } else { // If cake or client was not found using id
            return res.sendStatus(404);
        }
    } catch(error) {
        return res.sendStatus(500);
    }
}

export async function getOrders(req, res) {
    try {
        const date = req.query.date;
        const data = await getAllOrders(date);
        if (data.length === 0) {
            return res.status(404).send([]);
        }
        return res.status(200).send(data);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
}