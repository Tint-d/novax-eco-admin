import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import Guard from "./Guard";
import Fallback from "../components/Fallback";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ProductList = lazy(() => import("../pages/product/ProductList"));
const CreateProduct = lazy(() => import("../pages/product/CreateProduct"));
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
      path: paths.create_product,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <CreateProduct />
          </Guard>
        </Suspense>
      ),
    },
    {
      path: paths.product_list,
      element: (
        <Suspense fallback={<Fallback />}>
          <Guard>
            <ProductList />
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
