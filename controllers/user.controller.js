const model = require('../models')

function read(req, res) {
  model.User.findAll()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const userAdd = async (req, res) => {
  model.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
    .then(function (result) {
      res.json({
        message: 'Berhasil tambah user',
        data: result,
      })
    })
    .catch(function (error) {
      res.json({ error: error })
    })
}

function detailUser(req, res) {
  model.User.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then(function (result) {
      res.json({ data: result })
    })
    .catch(function (error) {
      res.json({ error: error })
    })
}
function deleteUser(req, res) {
  model.User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function (result) {
      res.json({
        message: 'Berhasil menghapus user',
      })
    })
    .catch(function (error) {
      res.json({ error: error })
    })
}

module.exports = {
  read,
  userAdd,
  detailUser,
  deleteUser,
}
