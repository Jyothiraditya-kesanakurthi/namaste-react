import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import ResMenuCards from "./Components/ResMenuCards";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
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
        element: <About />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenuCards />,
      },
    ],
    errorElement: <Error />,
  },
]);

const result = createRoot(document.getElementById("root"));

result.render(<RouterProvider router={appRouter} />);
