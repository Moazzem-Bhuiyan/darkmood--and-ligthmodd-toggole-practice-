import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main/Main";
import Home from "../Home/Home/Home";
import Post from "../Pages/Post/Post";
import Product from "../Pages/Product/Product";
import Shop from "../Pages/Shop/Shop";
import Page from "../Pages/Page/Page";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path : '/',
            element:<Home></Home>
        },
        {
            path:'/post',
            element:<Post></Post>
        },
        {
            path:'/page',
            element:<Page></Page>
        },
        {
            path:'/shop',
            element:<Shop></Shop>
        },
        {
            path:'/product',
            element:<Product></Product>
        },
      ]
    },
  ]);