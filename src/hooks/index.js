import { useEffect, useState } from "react";


export const useAuth = sessionStorage.getItem('email') /*() => {

//     return sessionStorage.getItem('sessionToken') !== "" && sessionStorage.getItem('sessionToken') !== null;

// }*/
export function useUser() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (useAuth === null || useAuth === undefined) {
            fetch
                ('http://localhost:5464/user/userInfo')
                .then((r) => r.json())
                .then((data) => {
                    sessionStorage.setItem("usuario", data)
                    setUser(data)
                }

                );
        }
        else {
            console.log('ya hay usuario')
        }
    }, []);
    return { user, setUser }
}

