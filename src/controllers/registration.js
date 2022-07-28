const registration = async (req,res) => {
  const op = req.params.op
    
  res.render('pages/registration', {
    op: req.params.op    
  })
}

module.exports = {
  registration
}