import connection from "../dbStrategy/postgres.js";

export async function findClientById(clientId) {
    const clientData = await connection.query(`SELECT * FROM clients WHERE id=${clientId};`);
    const clientExists = (clientData.rowCount === 1);
    return clientExists;
}

export async function findCakeById(cakeId) {
    const cakeData = await connection.query(`SELECT * FROM cakes WHERE id=${cakeId};`);
    const cakeExists = (cakeData.rowCount === 1);
    return cakeExists;
}

export async function createOrder(newOrderData) {
    return await connection.query(`INSERT INTO orders ("clientId", "cakeId", "quantity", "totalPrice") VALUES ($1, $2, $3, $4);`,
        [newOrderData.clientId, newOrderData.cakeId, newOrderData.quantity, newOrderData.totalPrice]);
}