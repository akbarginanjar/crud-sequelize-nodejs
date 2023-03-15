const { User } = require('./models')

//DELETE USER
User.destroy({ where: { id: 3 } })
  .then((result) => {
    console.log('sukses delete')
  })
  .catch((err) => {
    console.log('gagal delete')
  })
