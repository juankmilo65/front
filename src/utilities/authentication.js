export function clearToken() {
    localStorage.removeItem('token');
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