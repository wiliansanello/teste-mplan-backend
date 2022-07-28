const getUsers = require('../api/getAllUsersData')

const home = async(req, res) => {
  res.send(await getUsers(req, res))
}

module.exports = {
  home
}