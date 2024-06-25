import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantsManu from "./Components/RestaurantsManu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItem from "./Components/CartItem";

// Chunking
// Code Spliting
// Dynamic Bounding
// Lazy Loading
// on demand loading
// dynamic important

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    // Make an API call and send username or password
    const data = {
      name: "vipin kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantsManu />,
      },
      {
        path: "/CartItem",
        element: <CartItem />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
