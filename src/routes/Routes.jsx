import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import Guard from "./Guard";
import Fallback from "../components/Fallback";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Product = lazy(() => import("../pages/Product"));
const CreateCategory = lazy(() => import("../pages/category/CreateCategory"));
const CategoryList = lazy(() => import("../pages/category/CategoryList"));
const Customer = lazy(() => import("../pages/Customer"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: paths.login,
      element: (
        <Suspense fallback={<Fallback />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: paths.register,
      element: (
        <Suspense fallback={<Fallback />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: paths.home,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <Home />
          </Guard>
        </Suspense>
      ),
    },
    
    {
      path: paths.product,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <Product />
          </Guard>
        </Suspense>
      ),
    },
    {
      path: paths.create_category,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <CreateCategory />
          </Guard>
        </Suspense>
      ),
    },
    {
      path: paths.category_list,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <CategoryList />
          </Guard>
        </Suspense>
      ),
    },
    {
      path: paths.customers,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <Customer />
          </Guard>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
