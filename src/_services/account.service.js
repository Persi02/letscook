const saveToken = (token) => {
    localStorage.setItem('token', token);
}
const saveRefresToken = (refreshToken
) => {
    localStorage.setItem('refreshToken', refreshToken
    );
}
const removeToken = (token, refreshToken
) => {
    localStorage.removeItem('token', token);
    localStorage.removeItem('refreshToken', refreshToken);
}



export const accountService = { saveToken, saveRefresToken, removeToken }