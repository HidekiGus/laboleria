import connection from "../dbStrategy/postgres.js";

export async function findCakeName(cakeName) {
    const cakeCount = await connection.query(`SELECT * FROM cakes WHERE name=$1;`, [cakeName]);
    return (cakeCount.rowCount === 0);
}