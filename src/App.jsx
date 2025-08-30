import Chart from "./components/Chart";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./components/Info";

function App (){

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Sidebar/></>
  },
  {
    path: "/info",
    element: <><Info/></>
  },
])

  return(
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;