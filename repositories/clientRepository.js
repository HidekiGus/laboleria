import connection from "../dbStrategy/postgres.js";

export async function addClient(newClientData) {
    return await connection.query(`INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3);`, 
        [newClientData.name, newClientData.address, newClientData.phone]);
}

export async function findClientById(clientId) {
    const clientData = await connection.query(`SELECT * FROM clients WHERE id=${clientId};`);
    const clientExists = (clientData.rowCount === 1);
    return clientExists;
}

export async function getClientOrdersById(clientId) {
    const { rows: clientData } = await connection.query(`SELECT orders.*, cakes.name as "cakeName" FROM orders
                                                JOIN cakes
                                                ON orders."cakeId"=cakes.id
                                                WHERE orders."clientId"=${clientId};`);
    const array = clientData.map(item => {
        const obj = {
            orderId: item.id,
            quantity: item.quantity,
            createdAt: item.createdAt,
            totalPrice: Number(item.totalPrice),
            cakeName: item.cakeName
        }
        return obj;
    });
    return array;
}