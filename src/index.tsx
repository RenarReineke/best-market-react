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

import {store} from './store/Redux/store';
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
