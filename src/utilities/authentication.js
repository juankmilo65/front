export function getToken() {
    try {
        const token = JSON.parse(localStorage.getItem("persist:login")).token;
        return token;
    } catch (error) {
        return null;
    }   
}