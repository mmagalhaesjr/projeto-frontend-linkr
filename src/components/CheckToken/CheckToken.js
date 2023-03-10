
export function checkToken() {
    const token = localStorage.getItem('token');
    
    if (!token || token === null) {
        return false;
    }
    return true;
}