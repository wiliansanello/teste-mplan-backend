const select = require('./dbOperation')

module.exports = async (param, req, res) => {

const uniqueUser = `SELECT usr.usr_nome,
                  usr.usr_telefone,
                  usr.usr_celular,
                  usr.usr_nascimento,
                  usr.usr_email,
                  prf.prf_descricao
                  FROM usuarios usr join perfil_usuarios prf
                  on usr.usr_prf_id = prf.prf_id
                  where usr.usr id =${param}`
    
  const profiles = 'SELECT * FROM perfil_usuarios' 

  const result  = await Promise.all(
    select(uniqueUser),
    select(profiles)
  )

  res.end(JSON.stringify(
    result
  ))  

}
