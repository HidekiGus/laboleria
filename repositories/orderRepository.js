import connection from "../dbStrategy/postgres.js";

export async function createOrder(newOrderData) {
    return await connection.query(`INSERT INTO orders ("clientId", "cakeId", "quantity", "totalPrice") VALUES ($1, $2, $3, $4);`,
        [newOrderData.clientId, newOrderData.cakeId, newOrderData.quantity, newOrderData.totalPrice]);
}

export async function findOrderByDate(date) {
    const { rows: orders } = await connection.query(`SELECT * FROM orders
                                                    WHERE "createdAt" >= '${date} 00:00:00'
                                                    AND "createdAt" < '${date} 23:59:59.999999';`);
    return orders;
}

export async function getAllOrders(date) {
    const { rows } = await connection.query(`SELECT clients.name as "clientName", clients.address as "clientAddress", clients.phone as "clientPhone", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", orders.* FROM orders
    JOIN clients
    ON orders."clientId"=clients.id
    JOIN cakes
    ON orders."cakeId"=cakes.id
    ${date !== undefined ? `WHERE "createdAt" >= '${date} 00:00:00' AND "createdAt" < '${date} 23:59:59.999999'` : ""}
    ;`);
    const arraydeobjetos = rows.map((item) => {
        const obj = {
            client: {
                id: item.clientId,
                name: item.clientName,
                address: item.clientAddress,
                phone: item.clientPhone
            },
            cake: {
                id: item.cakeId,
                name: item.cakeName,
                price: item.cakePrice,
                description: item.cakeDescription,
                image: item.cakeImage
            },
            orderId: item.orderId,
            createdAt: item.createdAt,
            quantity: item.quantity,
            totalPrice: Number(item.totalPrice)
        }
        return obj;
    })
    return arraydeobjetos;
}