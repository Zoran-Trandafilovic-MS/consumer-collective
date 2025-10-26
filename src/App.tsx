import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementMccExplorerPathScreen } from "./screens/ElementMccExplorerPathScreen";
import { LoadingPersonas } from "./screens/LoadingPersonas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ElementMccExplorerPathScreen />,
  },
  {
    path: "/loading-personas",
    element: <LoadingPersonas />,
  },
  {
    path: "/persona-carousel",
    element: <div>PersonaCarousel - Coming Soon</div>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
