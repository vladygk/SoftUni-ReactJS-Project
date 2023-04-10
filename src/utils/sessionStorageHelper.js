export const save = (value)=>{
    sessionStorage.setItem('auth',JSON.stringify(value));
}


export const remove = ()=>{
    sessionStorage.removeItem('auth');
}

export const get = ()=>{
return JSON.parse(sessionStorage.getItem('auth'));
}