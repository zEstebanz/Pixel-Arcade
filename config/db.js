import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'Localhost',
    user: 'root',
    password: '1808',
    port: '3306',
    database: 'pixelarcade'
});

export { pool }; //exportado como objeto