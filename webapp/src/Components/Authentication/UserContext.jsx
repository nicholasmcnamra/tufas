import { createContext, useEffect, useState } from "react";
import Login from "./Login";
import { isAuthenticated } from "../APICalls/UserLogin";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const checkLoggedIn = async () => {
            let authenticatedUser = isAuthenticated();
            if (authenticatedUser == null) {
                sessionStorage.setItem('user', '');
                authenticatedUser = '';
            }
            setCurrentUser(authenticatedUser);
         };
         checkLoggedIn();
    }, []);

    console.log('usercontext', currentUser);

    return (
        <UserContext.Provider value ={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;