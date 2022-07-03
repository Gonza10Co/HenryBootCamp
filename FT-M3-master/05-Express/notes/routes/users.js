const {Router} = requiere('express')
const {getAllUsers, getUserDetail} = require('../controllers/users')
const auth = require('../middlewares/auth')

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', auth, getUserDetail)
// router.post('/'. createUser)
// router.put('/'. updateUser)
// router.delete('/'. deleteUser)

module.exports = router
