const db = require('../config/database')

const getAll = () => {
    return db.execute('SELECT * FROM barang');
}

const getId = (id) => {
    return db.execute(`SELECT * FROM barang where id = ${id}`);
}

const insert = (body) => {
    return db.execute(`INSERT INTO barang (nama,berat,asal,tujuan,jumlah) VALUES ('${body.nama}',${body.berat},'${body.asal}','${body.tujuan}',${body.jumlah})`);
}

const update = (body,id) => {
    const column = Object.keys(body)
        .map(col => `${col} = ?`)
        .join(', ');
    const values = Object.values(body);
    const query = `UPDATE barang set ${column} WHERE id=${id}`
    return db.execute(query, values);
}

const destroy = (id) => {
    return db.execute(`DELETE FROM barang where id = ${id}`);
}

module.exports = {getAll, getId, insert, update, destroy}