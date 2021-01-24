const sqlite3 = require('sqlite3').verbose()
const users = require('./db/default/users.json')
const usersStatistic = require('./db/default/users_statistic.json')
const dbinit = () => {
    let db = new sqlite3.Database('db/bitmedia.db')
db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users(id, first_name, last_name, email, gender, ip_address)')
        users.map(user => {
            db.run(`INSERT INTO users(id, first_name, last_name, email, gender, ip_address)
            VALUES (?, ?, ?, ?, ?, ?)`,[user.id, user.first_name, user.last_name, user.email, user.gender, user.ip_address])
        })
        db.run('CREATE TABLE IF NOT EXISTS users_statistic(user_id, date, page_views, clicks)')
        usersStatistic.map(statistic => {
            db.run(`INSERT INTO users_statistic(user_id, date, page_views, clicks)
            VALUES (?, ?, ?, ?)`,[statistic.user_id, statistic.date, statistic.page_views, statistic.clicks])
        })
        db.close((err) => {
            if (err) {
            return console.error(err.message);
            }
            console.log('Close the database connection.')
        })
    })   
}

module.exports = dbinit
