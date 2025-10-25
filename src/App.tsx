import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementMccExplorerPathScreen } from "./screens/ElementMccExplorerPathScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementMccExplorerPathScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
