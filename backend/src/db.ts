import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'synergy_prod',
  port: 5432,
  password: ""
});

export default pool;