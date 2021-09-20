// import { useRef } from "react"
import { useEffect } from "react";
import { useAuth } from "../hooks";



export function UserState() {
    useEffect(() => {
        if (useAuth !== null) {
            const sessionToken = sessionStorage.getItem("sessionToken");
            const options = {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${sessionToken}`,
                },
            };
            fetch("http://localhost:5464/userProgress/userProgressData", options)
                .then((r) => r.json())
                .then((data) => {
                    console.log(data);
                    //return data;
                });
        }

    }, []);
}