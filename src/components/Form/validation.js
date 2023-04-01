

const validation = (userData,errors,setErrors) => {

    if (!userData.username){
    setErrors ({...errors, username: "Por favor completa este campo"});
    }   
    else if (userData.username.length > 35)
        setErrors({...errors, username:"No puede superar los 35 caracteres"});
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(userData.username)){
        setErrors({...errors, username: "Email inválido"})
    }
    else{
        setErrors({ ...errors , username:""});
    }
    if (!userData.password){
    setErrors ({...errors, password: "Por favor completa este campo"});
    }
    else if (userData.password.length < 6 || userData.password.length > 10 || !/\d/.test(userData.password)){
        setErrors ({...errors, password: "La contraseña debe tener entre 6-10 caracteres e incluir un número."})
    }
    else{
        setErrors({...errors,password:""})
    }
};

export default validation;