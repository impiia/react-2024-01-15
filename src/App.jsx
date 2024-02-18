import { useState } from "react";
import { UserContext } from "./contexts/user";
import { store } from "./redux";
import { Provider } from "react-redux";
//import { RestaurantPage } from "./pages/restaurant-page/component";
import {Layout} from "./components/layout/component";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { ContactsPage } from "./pages/contacts-page/contacts-page";
import { AboutUsPage } from "./pages/about-us-page/home-page";
import { RestaurantPage } from "./pages/restaurant-page/component";

export const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/contacts",
    element:  <ContactsPage/>,
  },
  {
    path: "/about-us",
    element:  <AboutUsPage/>,
  },
  {
    path: "/restaurants",
    element:  <RestaurantPage/>,
  },
]);

  return (
    <Provider store={store}>
    <UserContext.Provider value={{ ...user, setUser }}>
    <Layout >
      <RouterProvider router={router} />
    </Layout>
    </UserContext.Provider>
    </Provider>
  )
}