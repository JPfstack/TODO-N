const mysql = require('mysql');

const connect = () => {
    const pool = mysql.createPool({
        host: "j5zntocs2dn6c3fj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        user: "iqgy0z7oowxx15ip",
        password: "pvd0mpdhqysrrar5",
        port: 3306,
        database: "s9q90jl9ash7sm2k"
    });

    global.db = pool;
};

module.exports = { connect };