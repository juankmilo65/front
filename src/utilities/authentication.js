export function getToken() {
    try {
        const token = localStorage.getItem("persist:login").token;
        debugger
        return token;
    } catch (error) {
        return null;
    }   
}