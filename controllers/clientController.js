import { addClient } from "../repositories/clientRepository.js";

export async function postClient(req, res) {
    try {
        const newClientData = req.body;
        await addClient(newClientData);
        return res.sendStatus(201);
    } catch(error) {
        return res.sendStatus(500);
    }
}