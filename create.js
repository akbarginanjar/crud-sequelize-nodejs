const { User } = require('./models')

//CREATE USER
const data = {
  firstName: 'Kidam',
  lastName: 'Kusnandi',
  email: 'kidamkus@gmail.com',
}

User.create(data)
  .then((result) => {
    console.log('sukses insert')
  })
  .catch((err) => {
    console.log('gagal insert')
  })
