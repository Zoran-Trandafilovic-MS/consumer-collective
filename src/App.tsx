import { RouterProvider, createHashRouter } from "react-router-dom";
import { ElementMccExplorerPathScreen } from "./screens/ElementMccExplorerPathScreen";
import { LoadingPersonas } from "./screens/LoadingPersonas";
import { PersonaCarousel } from "./screens/PersonaCarousel";

const router = createHashRouter([
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
    element: <PersonaCarousel />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
