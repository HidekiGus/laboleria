import { createOrder, findCakeById, findClientById } from "../repositories/orderRepository.js";

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