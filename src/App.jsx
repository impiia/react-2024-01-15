import { useState } from "react";
import { restaurants } from './materials/mock';
import { Layout } from './components/layout/component';
import { UserContext } from "./contexts/user";


export const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    
    <UserContext.Provider value={{ ...user, setUser }}>
      <Layout restaurants={restaurants} />
    </UserContext.Provider>
  )
}
