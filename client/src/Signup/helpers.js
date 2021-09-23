const validateName = (name) =>{
    return /(^[A-z]+[A-z'-]*){1,50}$/.test(name)
}

const validateEmail = (email) =>{
    
}
export { 
    validateName
}