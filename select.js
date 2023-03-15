const { User } = require('./models/user')

const read = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  read,
}
