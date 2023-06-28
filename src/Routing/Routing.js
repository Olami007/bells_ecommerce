import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Register from "../pages/Register";
import ProductPreview from "../pages/ProductPreview";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import VerificationPage from "../pages/VerificationPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";
// import { CheckoutForm } from "../pages/Stripe";

let user = localStorage.getItem("user");
export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   children: [{ path: ":id", element: <ProductPreview /> }],
  // },
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:productid",
        element: <ProductPreview />,
      },
    ],
  },
  { path: "/about", element: <About /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: user ? <Dashboard /> : <UnauthorizedPage /> },
  { path: "/verification", element: <VerificationPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  // { path: "/stripe", element: <CheckoutForm /> },
  { path: "*", element: <ErrorPage /> },
]);
