import cakeSchema from "../schemas/cakeSchema.js";
import { findCakeName } from "../repositories/cakeRepository.js";
import connection from "../dbStrategy/postgres.js";

export async function postCakes(req, res) {
    try {
        const newCake = req.body;
        const cakeDoesNotExist = await findCakeName(req.body.name);
        if (cakeDoesNotExist) { // If cake name does not exist
            await connection.query(`INSERT INTO cakes ("name", "price", "image", "description") VALUES ($1, $2, $3, $4);`,
            [newCake.name, newCake.price, newCake.image, newCake.description]);
            return res.sendStatus(201);
        } else { // If cake name already exists
            return res.sendStatus(409);
        }
    } catch(error) {
        return res.sendStatus(500);
    }
} 