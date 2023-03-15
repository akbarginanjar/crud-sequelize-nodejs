const router = require('express').Router()

const userController = require('../controllers/user.controller')

router.get('/user', userController.read)
router.post('/user/add', userController.userAdd)
router.get('/user/detail/:id', userController.detailUser)
router.delete('/user/delete/:id', userController.deleteUser)

module.exports = router
