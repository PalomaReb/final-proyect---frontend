import { useEffect, useState } from "react";


export const useAuth = sessionStorage.getItem('sessionToken')

//     return sessionStorage.getItem('sessionToken') !== "" && sessionStorage.getItem('sessionToken') !== null;

// }*/
export function useUser() {
    const [userInfo, setUser] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5464/user/userInfo')
            .then((r) => r.json())
            .then((data) => {
                sessionStorage.setItem("usuario", data)
                setUser(data)
            }
            );
    }, []);
    return { userInfo, setUser }
}
