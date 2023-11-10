import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";

const router = createBrowserRouter([
  { path: "/", element: <Chat /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/setAvatar", element: <SetAvatar /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
