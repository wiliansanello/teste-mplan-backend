const dbOperation = require('../api/dbOperation')

const record = async(req,res) =>{
  /*const {name, phone, cellphone,birth, email, profile } = req.query
    const dataUser = {
      usrName: name,
      phone,
      cellphone,
      birth,
      email,
      profile
    }*/
    console.log(req.body)
    /*const qry = `insert into usuarios 
    (usr_nome, usr_telefone, usr_celular, usr_nascimento, usr_email, usr_prf_id)
    values(${usrName},${phone},${cellphone},${birth},${email},${profile})`
    res.send(await dbOperation(qry))*/ 
    
    res.render('pages/record')
  
}

module.exports = {
  record
}