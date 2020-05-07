const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "Attribute '{PATH}' is required"
mongoose.Error.messages.Number.min = 
  "The {PATH} '{VALUE}' informed is lower than the minimum of '{MIN}'."
mongoose.Error.messages.Number.max = 
  "The {PATH} '{VALUE}' informed is higher than the maximum of '{MAX}'."
mongoose.Error.messages.String.enum = 
  "'{VALUE}' is not valid for the attribute '{PATH}'."


