import { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import Fibre from "./Pages/Jobs/Fibre/Fibre";
import Mosaique from "./Pages/Jobs/Mosaique/Mosaique";
import Peinture from "./Pages/Jobs/Peinture/Peinture";
import Tapisserie from "./Pages/Jobs/Tapisserie/Tapisserie";
import Verre from "./Pages/Jobs/Verre/Verre";
import "./App.scss"
import About from "./Pages/About/About";


const Layout = () => {
  return (
  <div className="app">
  <Navbar/>
  <Outlet/>
  <Footer/>
</div>
);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/fibre",
        element:<Fibre/>
      },
      {
        path:"/mosaique",
        element:<Mosaique/>
      },
      {
        path:"/peinture",
        element:<Peinture/>
      },
      {
        path:"/tapisserie",
        element:<Tapisserie/>
      },
      {
        path:"/verre",
        element:<Verre/>
      },

      {
        path:"/about",
        element:<About/>
      },

    ]
  },
  
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
