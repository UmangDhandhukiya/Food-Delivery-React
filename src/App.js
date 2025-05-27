import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utills/UserContext";

// if we need to pass some value in our context then used provider which is used for passed value in our context if we need use in whole app then need to wrap whole app

const AppLayout = () => {
  return (
    // now name is used in whole app
    <UserContext.Provider value={{ name: "Umang" }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </UserContext.Provider>
  );
};

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loding......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", //this is dyanmic route after : dynamic value allow
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
