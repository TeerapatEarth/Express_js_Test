const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send({
        name:'earth',
        age:'20'
    })
})
router.get('/test', (req, res) => {
    res.send({
        msg:'aslkdjasdl'
    })
})
router.get('/login', (req, res) =>{
    res.send({
        name: 'eesama'
    })
})

module.exports = router