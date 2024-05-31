import { Pool } from 'pg';
import * as dotenv from "dotenv";

<<<<<<< HEAD
const pool = new Pool({
  host: 'localhost',
  database: 'synergy_prod',
  port: 5432,
  password: ""
});
=======
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'), // Default port if not specified
  user: process.env.DB_USER!,
  database: process.env.DB_NAME!
};

const pool = new Pool(dbConfig );
>>>>>>> 0e58a378b110bcecb4fc0da918ccaa21f15a13ef

export default pool;