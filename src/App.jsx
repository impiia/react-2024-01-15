import { useState } from "react";
import { Layout } from './components/layout/component';
import { UserContext } from "./contexts/user";
import { store } from "./redux";
import { Provider } from "react-redux";
import { RestaurantPage } from "./components/pages/restaurant-page/component";

export const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{ ...user, setUser }}>
      <RestaurantPage />
    </UserContext.Provider>
    </Provider>
  )
}
