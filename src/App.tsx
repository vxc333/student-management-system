import Edit from "./screens/Edit";
import Home from "./screens/Home";
import Add from "./screens/Add";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
