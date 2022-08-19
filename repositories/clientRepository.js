import connection from "../dbStrategy/postgres.js";

export async function addClient(newClientData) {
    return await connection.query(`INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3);`, 
        [newClientData.name, newClientData.address, newClientData.phone]);
}