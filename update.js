const { User } = require('./models')

//UPDATE USER
const data = {
  firstName: 'Lionel',
  lastName: 'Messi',
  email: 'messi@gmail.com',
}

User.update(data, { where: { id: 2 } })
  .then((result) => {
    console.log('sukses update')
  })
  .catch((err) => {
    console.log('gagal update')
  })
