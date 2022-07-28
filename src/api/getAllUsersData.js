const select = require('./dbOperation')

module.exports = async (req, res) => {
  
const allUsers = `SELECT usr.usr_id,
                  usr.usr_nome,
                  usr.usr_telefone,
                  usr.usr_celular,
                  usr.usr_nascimento,
                  usr.usr_email,
                  prf.prf_descricao
                  FROM usuarios usr join perfil_usuarios prf
                  on usr.usr_prf_id = prf.prf_id`                  

  const result = await select(allUsers)  
  
  res.end(JSON.stringify(
    result
  ))  
} 



