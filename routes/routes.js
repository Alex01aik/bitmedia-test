const express = require('express')
const cors = require('cors')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

router.get('/users', cors(corsOptions), (req, res) => {
    let page = req.query.page
    let rowcount = 50
    let offset = rowcount * (page - 1)
    let data =[]
    let db = new sqlite3.Database('./db/bitmedia.db')
    db.serialize(() => {
        db.all(`SELECT * from users LIMIT ? OFFSET ?`, [rowcount, offset], (err, rows) => {
            data.push({items: rows})
        })
        for(let i = 0; i < rowcount; i++){
            db.all(`SELECT sum(page_views) total_page_views from users_statistic WHERE user_id = ?`, [i+1+offset], (err, rows) =>{
                data[0].items[i].total_page_views = rows[0].total_page_views
            })
            db.all(`SELECT sum(clicks) total_clicks from users_statistic WHERE user_id = ?`, [i+1+offset], (err, rows) =>{
                data[0].items[i].total_clicks = rows[0].total_clicks
            })
        }
        db.all(`SELECT count(*) count from users`, [], (err, rows) =>{
            rows.forEach(row => data.push({all: row.count}))
            res.send({...data[0], ...data[1]})
        })
        db.close()
    }) 
})

router.get('/user/:id', cors(), (req, res) => {
    let userId = parseInt(req.params.id)
    let data = []
    let db = new sqlite3.Database('./db/bitmedia.db')
    db.serialize(() => {
        db.all(`SELECT * from users WHERE id = ?`, [userId], (err, rows) => {
            data.push({user: rows[0]})
        })
            db.all(`SELECT * from users_statistic WHERE user_id = ?`, [userId], (err, rows) =>{
                data.push({stats: rows})
                res.send({...data[0], ...data[1]})
            })
        db.close()
    })
})

module.exports = router
