const PORT = process.env.PORT || 3001

const DB_HOST = process.env.DB_HOST || 'containers-us-west-170.railway.app'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'JZf5A1kwaCg88vXqvz7w'
const DB_NAME = process.env.DB_NAME || 'railway'
const DB_PORT = process.env.DB_PORT || 5635

module.exports = {
    PORT, 
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
}