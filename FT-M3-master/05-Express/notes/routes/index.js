const {Router} = require('express')
const users_router = require('./users')

const router = Router()

router.use('users',users_router)

module.exports = router