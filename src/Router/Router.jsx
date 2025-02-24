import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Banner from "../Components/Banner/Banner";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
            path:'/',
            element:<Banner/>
      }
    ]
  },
]);

export default Router;
