const access = require('../services/accessDb')
access.connectDb()

const pool = access.pool

const operation = async (qry) => {
  let result = ''
  
  try {    
    const response = await pool.query(qry)
    result = response.rows
    //await pool.end()
    console.log('Operação finalizada com sucesso no banco PostgreSQL') 
          
    } catch (err) {
      console.log('Erro ao tentar realizar a operação no banco PostgreSQL: ',err.stack)
    }  
    return result
}

module.exports = operation