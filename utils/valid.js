

const valid = (name, email, password) => {
    if (!name || !email || !password)
        return "Please Add All Fields.."


    if (password.length < 6)
        return "Password Must Be At Least 6 Character.."

    if(!validateEmail(email))
        return "Enter Valid Email"

}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
};

export default valid;