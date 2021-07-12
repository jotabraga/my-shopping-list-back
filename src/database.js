import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  user: "bootcamp_role",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "my_shopping_list"
});

export default connection;
