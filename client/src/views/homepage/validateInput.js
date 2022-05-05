const validateInput = (input) => {
  if(input.message != "") {
    return true ;
  }
  else {
    return false ;
  }
}

module.exports = validateInput ;
