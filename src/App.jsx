import { store } from "./redux";
import { Provider } from "react-redux";
import { RestaurantPage } from "./pages/restaurant-page/component";
import { Layout } from "./components/layout/component";
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { ContactsPage } from "./pages/contacts-page/contacts-page";
import { MenuContainer } from "./components/menu/container";
import { Reviews } from "./components/reviews/component";
import { DishPage } from "./pages/dish-page/dish-page";
import { Restaurant } from "./components/restaurant/component";
import { AboutUsPage } from "./pages/about-us-page/about-us-page";

export const App = () => {
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
              element: <Restaurant />,
              children: [
                {
                  index: true,
                  element: <Navigate to="menu" replace/>,
                },
                {
                  path: "menu",
                  element: <MenuContainer />,
                },
                {
                  path: "reviews",
                  element: <Reviews />,
                },
              ],
            },
          ],
        },
        {
          path: "dish/:dishId",
          element: <DishPage />
        }
      ],
    },

  ]);

  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}