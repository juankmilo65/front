export function clearToken() {
    localStorage.removeItem('id_token');
}

export function getToken() {
    try {
        const token = localStorage.getItem("token");
        return token;
    } catch (error) {
        return null;
    }   
}

export function logout() {
    localStorage.removeItem("token");
}