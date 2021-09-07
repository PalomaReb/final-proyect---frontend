export const useAuth = () => {

    return sessionStorage.getItem('sessionToken') !== "" && sessionStorage.getItem('sessionToken') !== null;


}