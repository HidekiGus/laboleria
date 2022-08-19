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