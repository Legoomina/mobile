import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    email: "Antananarywa.adsa@gmail.com",
    id: 121,
    isLoggedIn: true,
    accessToken: "Asdasdasdasda",
    refreshToken: "Awdawdawdadad",
    firstName: "Mateusz",
    lastName: "Jam",
    isStudent: true,
    isTeacher: true,
    isUserLoaded: true,
  });

  return <UserProvider.Provider>{children}</UserProvider.Provider>;
};

export { UserProvider };
export default UserContext;
