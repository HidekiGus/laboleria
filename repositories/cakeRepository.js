import connection from "../dbStrategy/postgres.js";

export async function findCakeName(cakeName) {
    const cakeCount = await connection.query(`SELECT * FROM cakes WHERE name=$1;`, [cakeName]);
    return (cakeCount.rowCount === 0);
}

export async function addCake(newCake) {
    return await connection.query(`INSERT INTO cakes ("name", "price", "image", "description") VALUES ($1, $2, $3, $4);`,
            [newCake.name, newCake.price, newCake.image, newCake.description]);
}