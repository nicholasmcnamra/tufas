import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const isAuthenticated = () => {
    const currentUser = sessionStorage.getItem('user');
    if (!currentUser) {
      return {}
    }
    return JSON.parse(currentUser);
  }

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


    return (
        <UserContext.Provider value ={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;