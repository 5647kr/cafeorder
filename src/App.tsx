import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/page/Home";
import Menu from "./routes/page/Menu";
import Detail from "./routes/page/Detail";
import Cart from "./routes/page/Cart";
import Order from "./routes/page/Order";
import Default from "./routes/layout/Default";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    children: [
      { path: "", Component: Home },
      { path: "/menu", Component: Menu },
      { path: "/detail/:id", Component: Detail },
      { path: "/cart", Component: Cart },
      { path: "/order", Component: Order },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
