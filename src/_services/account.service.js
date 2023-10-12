const saveToken = (token) => {
    localStorage.setItem('token', token);
}
const removeToken = (token) => {
    localStorage.removeItem('token', token);
}



export const accountService = { saveToken, removeToken }