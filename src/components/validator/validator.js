const validateEmail = (email) => {
    // let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$/;
    return emailRegex.test(email);
}

const validatePassword = (password) => {
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}

const validatePhone = (phone) => {
    let phoneRegex =  /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\\.]?[(]?[0-9]{1,3}[)]?([-\s\\.]?[0-9]{3})([-\s\\.]?[0-9]{3,4})/;
    return phoneRegex.test(phone);
}

const validateAge = (age) => {
    let ageRegex =  /^[0-9]*$/;
    return ageRegex.test(age);
}

const validateCity = (city) => {
    let cityRegex =  /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    return cityRegex.test(city);
}
export default { validateEmail, validatePassword, validatePhone, validateAge, validateCity };