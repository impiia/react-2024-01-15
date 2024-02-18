import { useState } from "react";
import { UserContext } from "./contexts/user";
import { store } from "./redux";
import { Provider } from "react-redux";
import { RestaurantPage } from "./pages/restaurant-page/component";
import { Layout } from "./components/layout/component";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { ContactsPage } from "./pages/contacts-page/contacts-page";
import { AboutUsPage } from "./pages/about-us-page/home-page";
import { Restaurant } from "./components/restaurant/component";
import { MenuContainer } from "./components/menu/container";
import { Reviews } from "./components/reviews/component";

export const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
        {
          path: "about-us",
          element: <AboutUsPage />,
        },
        {
          path: "restaurants",
          element: <RestaurantPage />,
          children: [
            {
              path: ":restaurantId",
              element:  null,
              children: [
                {
                  path: "menu",
                   element: <div><MenuContainer /></div>,
                },
                {
                  path: "reviews",
                   element: <div><Reviews /></div>,
                },
              ],
            },
          ],
        },
      ],
    },

  ]);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ ...user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Provider>
  )
}