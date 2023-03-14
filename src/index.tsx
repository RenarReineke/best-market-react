import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminDashboard from "./pages/AdminPage/AdminDashboard";
import NotFound from "./pages/NotFound";
import CategoryDetailPage from "./pages/AdminPage/components/Main/components/CategoryDetailPage";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      {
        path: "/admin",
        element: <AdminDashboard />,
        children: [{ path: ":id", element: <CategoryDetailPage /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
