import { Pool } from 'pg';

const pool = new Pool({
  user:'postgres',
  host: 'localhost',
  database: 'synergy_prod',
  port: 5432,
});

export default pool;