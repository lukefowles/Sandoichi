import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sandoichi",
    password: "test",
    port: 5432
})

export default pool