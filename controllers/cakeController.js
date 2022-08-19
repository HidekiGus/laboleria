import { addCake, findCakeName } from "../repositories/cakeRepository.js";

export async function postCakes(req, res) {
    try {
        const newCake = req.body;
        const cakeDoesNotExist = await findCakeName(req.body.name);
        if (cakeDoesNotExist) { // If cake name does not exist
            await addCake(newCake);
            return res.sendStatus(201);
        } else { // If cake name already exists
            return res.sendStatus(409);
        }
    } catch(error) {
        return res.sendStatus(500);
    }
} 