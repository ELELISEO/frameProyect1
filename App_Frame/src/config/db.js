import mysql from 'mysql2';
import util from 'util'

const pool = mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'root',
  password:'',
  database:'usuariosdani'
})

pool.query = util.promisify(pool.query);

export default pool