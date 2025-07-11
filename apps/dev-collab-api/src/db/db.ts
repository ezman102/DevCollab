import mysql from 'mysql2/promise';

const dbConfig = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "P@ssw0rd",
  database: "DevCollab",
};

const pool = mysql.createPool(dbConfig);

export const checkConnectionStatus = async (): Promise<boolean> => {
    try {
        const connection = await pool.getConnection();
        await connection.query('SELECT 1');
        connection.release();
        return true; 
    } catch (err) {
        console.error('Error testing database connection:', err);
        return false; 
    }
};

export default pool;